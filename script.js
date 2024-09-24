let myLibrary = [];

function resetLibrary() {
  myLibrary=[]
}

function Book(title,author,numPages) {
  this.title=title;
  this.author=author;
  this.numPages=numPages;
}

const book1= new Book("got","frambi",256);
const book2= new Book("harry","JKR",113);

function addBookToLibrary(book) {
  myLibrary.push(book);
}

addBookToLibrary(book1);
addBookToLibrary(book2);


for(const book in myLibrary) {
    // console.log(myLibrary[book].title);
    // console.log(myLibrary[book].numPages);
}

// -------- GETTING USER INPUT AND DISPLAY IT------

const bookTitle=document.querySelector("#title");
const bookAuthor=document.querySelector("#author");
const bookPages=document.querySelector("#num-pages");

// BUTTONS 

const submitBook=document.querySelector("#submit-btn")
const resetButton=document.querySelector("#reset-btn")

//
const displayTitle=document.querySelector("#book-one .book-title")
const titleValue=document.createElement("p")

displayTitle.appendChild(titleValue);

const displayAuthor=document.querySelector("#book-one .book-author")
const authorValue=document.createElement("p")

displayAuthor.appendChild(authorValue);

const displayPages=document.querySelector("#book-one .book-pages")
const pagesValue=document.createElement("p")

displayPages.appendChild(pagesValue);


submitBook.addEventListener("click", (event) => {
  event.preventDefault();

  let addedBook=document.createElement(".book-display >.added-book");

  book=new Book(bookTitle.value,bookAuthor.value,bookPages.value);
  addBookToLibrary(book);

  titleValue.textContent=myLibrary[0].title;
  authorValue.textContent=myLibrary[0].author;
  pagesValue.textContent=myLibrary[0].numPages;
 
  
})

resetButton.addEventListener("click", (event)=> {
  event.preventDefault();
  resetLibrary();
})