//------- VARIABLES -----------------
let myLibrary = [];

// ---------- USER INPUTS

const form = document.getElementById("form");
const bookTitle = document.querySelector("#title");
const bookAuthor = document.querySelector("#author");
const bookPages = document.querySelector("#num-pages");
// BUTTONS

const submitBook = document.querySelector("#submit-btn");
const resetButton = document.querySelector("#reset-btn");
const closeButton = document.querySelector("#close-btn");
const readButton = document.querySelector("#read-btn");

//--------------------BOOKS CONTAINER
const bookDisplay = document.querySelector(".book-display");

//
const displayTitle = document.querySelector(".book-title");
const titleValue = document.createElement("p");

const displayAuthor = document.querySelector(".book-author");
const authorValue = document.createElement("p");

const displayPages = document.querySelector(".book-pages");
const pagesValue = document.createElement("p");

// ------------- FUNCTIONS

class Book {
  constructor(title, author, numPages) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
  }
}

function resetLibrary() {
  myLibrary = [];
  addBookToLibrary(
    new Book("A Song of Ice and Fire", "George R. R. Martin", 256)
  );
  createBookCard(myLibrary[0]);
  clickCounter = 0;
  while (bookDisplay.childNodes.length > 2) {
    bookDisplay.removeChild(bookDisplay.lastChild);
  }
}

function removeBook() {
  bookDisplay.removeChild(bookDisplay.lastChild);
}

function resetTitle() {
  bookTitle.value = "";
  bookAuthor.value = "";
  bookPages.value = "";
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function createBookCard(book) {
  const newBook = bookDisplay.children[0].cloneNode(true);

  // Update the new book with the current book information
  newBook.querySelector(".book-title").textContent = book.title;
  newBook.querySelector(".book-author").textContent = book.author;
  newBook.querySelector(".book-pages").textContent = book.numPages;

  const newButton = newBook.querySelector("#read-btn");

  let readBtnCounterAux = 0;

  newBook.querySelector("#read-btn").addEventListener("click", () => {
    if (readBtnCounterAux % 2 == 0) {
      newButton.value = "Already red";
      newButton.style.backgroundColor = "Green";
    } else {
      newButton.value = "Not readen yet";
      newButton.style.backgroundColor = "Red";
    }
    readBtnCounterAux++;
  });

  // Append the new book to the book display
  bookDisplay.appendChild(newBook);

  newBook.querySelector("#close-btn").addEventListener("click", () => {
    bookDisplay.removeChild(newBook);
  });
}

function defaultBook(book) {
  const firstBook = bookDisplay.children[0];
  firstBook.querySelector(".book-title").textContent = book.title;
  firstBook.querySelector(".book-author").textContent = book.author;
  firstBook.querySelector(".book-pages").textContent = book.numPages;
}

//form validation functions
const SetError = (element, message) => {
  const errorContainer = element.parentElement;
  const errorDisplay = errorContainer.querySelector(".error");

  errorDisplay.innerText = message;

  errorContainer.classList.add("error");
  errorContainer.classList.remove("success");
};

const SetSuccess = (element) => {
  const errorContainer = element.parentElement;
  const errorDisplay = errorContainer.querySelector(".error");

  errorDisplay.innerText = "";
  errorContainer.classList.add("success");
  errorContainer.classList.remove("error");
};
const ValidateInputs = () => {
  if (bookTitle.value === "") {
    SetError(bookTitle, "Title cannot be empty");
    return false; // Exit if title is empty
  } else if (bookTitle.value.length < 3) {
    SetError(bookTitle, "Title must be at least 3 characters long");
    return false; // Exit if title is too short
  } else {
    SetSuccess(bookTitle);
  }

  if (bookAuthor.value === "") {
    SetError(bookAuthor, "Author name cannot be empty");
    return false; // Exit if title is empty
  } else if (bookAuthor.value.length < 3) {
    SetError(bookAuthor, "Author name must be at least 3 characters long");
    return false; // Exit if title is too short
  } else {
    SetSuccess(bookAuthor);
  }

  if (bookPages.value === "") {
    SetError(bookPages, "Number of pages cannot be empty");
    return false; // Exit if title is empty
  } else if (bookPages.value < 10) {
    SetError(bookPages, "Number of pages must be at least 10");
    return false; // Exit if title is too short
  } else {
    SetSuccess(bookPages);
    return true; // Title is valid
  }
};

setInterval(ValidateInputs(), 100);

//function call
addBookToLibrary(
  new Book("A Song of Ice and Fire", "George R. R. Martin", 256)
);

defaultBook(myLibrary[0]);

// -------- GETTING USER INPUT AND DISPLAY IT------

let clickCounter = 0;

form.addEventListener("submit", (event) => {
  event.preventDefault(); //avoid the page reseting each time the button is clicked
  if (ValidateInputs()) {
    ++clickCounter;

    book = new Book(bookTitle.value, bookAuthor.value, bookPages.value);
    addBookToLibrary(book);

    createBookCard(myLibrary[clickCounter]);
    resetTitle();
  }
});

readBtnCounter = 0;

resetButton.addEventListener("click", (event) => {
  event.preventDefault();
  resetLibrary();
});

readButton.addEventListener("click", () => {
  if (readBtnCounter % 2 == 0) {
    readButton.value = "Already red";
    readButton.style.backgroundColor = "Green";
  } else {
    readButton.value = "Not readen yet";
    readButton.style.backgroundColor = "Red";
  }
  readBtnCounter++;
});
