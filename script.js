//------- VARIABLES -----------------
let myLibrary = [];


// ---------- USER INPUTS
const bookTitle=document.querySelector("#title");
const bookAuthor=document.querySelector("#author");
const bookPages=document.querySelector("#num-pages");
// BUTTONS 

const submitBook=document.querySelector("#submit-btn")
const resetButton=document.querySelector("#reset-btn")
const closeButton=document.querySelector("#close-btn")

//--------------------BOOKS CONTAINER
const bookDisplay=document.querySelector(".book-display");


//  
const displayTitle=document.querySelector(".book-title")
const titleValue=document.createElement("p")


const displayAuthor=document.querySelector(".book-author")
const authorValue=document.createElement("p")

const displayPages=document.querySelector(".book-pages")
const pagesValue=document.createElement("p")

// ------------- BOOKS THAT APPEARS BY DEFAULT

const book1= new Book("A Song of Ice and Fire","George R. R. Martin",256);
const book2= new Book("harry","JKR",113);



 //--------- FUNCTIONS ------------
 function resetLibrary() {
  myLibrary=[];
  addBookToLibrary(book1);
  createBookCard(myLibrary[0]);
  clickCounter=0;
  while (bookDisplay.childNodes.length>2) {
    bookDisplay.removeChild(bookDisplay.lastChild);
}
}

function removeBook() {
  bookDisplay.removeChild(bookDisplay.lastChild);
}

function resetTitle() {
  bookTitle.value="";
  bookAuthor.value="";
  bookPages.value="";


}

function Book(title,author,numPages) {
  this.title=title;
  this.author=author;
  this.numPages=numPages;
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
  
  // Append the new book to the book display
  bookDisplay.appendChild(newBook);

  newBook.querySelector("#close-btn").addEventListener("click",() =>
  {
    bookDisplay.removeChild(newBook);
  });

}

function defaultBook(book) {
  const firstBook = bookDisplay.children[0];
  firstBook.querySelector(".book-title").textContent = book.title;
  firstBook.querySelector(".book-author").textContent = book.author;
  firstBook.querySelector(".book-pages").textContent = book.numPages;
  
  
}

addBookToLibrary(book1);

defaultBook(myLibrary[0]);




// -------- GETTING USER INPUT AND DISPLAY IT------

let clickCounter=0;
submitBook.addEventListener("click", (event) => {
  event.preventDefault(); //avoid the page reseting each time the button is clicked

  ++clickCounter;
  console.log(clickCounter);
  
  book=new Book(bookTitle.value,bookAuthor.value,bookPages.value);
  addBookToLibrary(book);

  createBookCard(myLibrary[clickCounter]);
  resetTitle();
})

resetButton.addEventListener("click", (event)=> {
  event.preventDefault();
  resetLibrary();
})


