const myLibrary = [];

//constructor of book
function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

const newBookBtn = document.querySelector("#new-book-btn");
const newBookForm = document.querySelector("#book-form");
newBookBtn.addEventListener("click", function() {
  newBookForm.classList.toggle("hidden");
  newBookBtn.classList.add("hidden");
})
document.querySelector("#cancel-btn").addEventListener("click", function() {
  newBookForm.classList.add("hidden")
  newBookBtn.classList.toggle("hidden");
})


//function to add book
function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);

  myLibrary.push(newBook);
}

//function to display book
function displayBooks() {
  const bookList = document.querySelector("#library-container");
  myLibrary.forEach((book, index) => {
    const bookElement = document.createElement("div");
    bookElement.classList.add('book');
    bookElement.innerHTML = `
      <h2>${book.title}</h2>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <p>Read: ${book.read ? `Yes` : `No`}</p>
      <button onclick="toggleReadStatus(${index})">Toggle Read Status</button>
      <button onclick="removeBook(${index})">Remove Book</button>
      `;
    bookList.appendChild(bookElement);
  })
}

//handle submit button
document.querySelector("#add-book-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read").checked;

  addBookToLibrary(title, author, pages, read);

  this.reset();

  displayBooks();
})

//function to remove book
function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBooks();
}

//function to toggle read status
function toggleReadStatus(index) {
  myLibrary[index].read = !myLibrary[index].read;
  displayBooks()
}