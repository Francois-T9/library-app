//------- VARIABLES -----------------
let myLibrary = [];


// ---------- USER INPUTS
const bookTitle=document.querySelector("#title");
const bookAuthor=document.querySelector("#author");
const bookPages=document.querySelector("#num-pages");
// BUTTONS 

const submitBook=document.querySelector("#submit-btn")
const resetButton=document.querySelector("#reset-btn")

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
  myLibrary=[]
  while (bookDisplay.childNodes.length>2) {
    bookDisplay.removeChild(bookDisplay.lastChild);
}

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
  
  bookDisplay.appendChild(bookDisplay.children[0].cloneNode(true));
  displayTitle.textContent=book.title;
  displayAuthor.textContent=book.author;
  displayPages.textContent=book.numPages;
  


}

function defaultBook(book) {
  displayTitle.textContent=book.title;
  displayAuthor.textContent=book.author;
  displayPages.textContent=book.numPages;
  
  
}

addBookToLibrary(book1);

defaultBook(myLibrary[0]);




// -------- GETTING USER INPUT AND DISPLAY IT------

let clickCounter=0;
submitBook.addEventListener("click", (event) => {
  event.preventDefault(); //avoid the page reseting each time the button is clicked

  ++clickCounter;
  
  

  book=new Book(bookTitle.value,bookAuthor.value,bookPages.value);
  addBookToLibrary(book);
  
  
  // displayTitle.textContent=myLibrary[clickCounter].title;
  // displayAuthor.textContent=myLibrary[clickCounter].author;
  // displayPages.textContent=myLibrary[clickCounter].numPages;
  
  createBookCard(myLibrary[clickCounter]);


  
 
  
})

resetButton.addEventListener("click", (event)=> {
  event.preventDefault();
  resetLibrary();
})


