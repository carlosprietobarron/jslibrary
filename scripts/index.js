const myLibrary = [];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;

}

Book.prototype.addToLibrary= function(library) {
    library.push(this);
}

book1 = new Book("Issac Assimov", "The Foundation", 200, false );
book1.addToLibrary(myLibrary);
book2 = new Book("Brian Green", "The Elegant Universe", 450, false);
book2.addToLibrary(myLibrary);
book3 = new Book("Pablo Cohelo", "The Alchemist", 230, true);
book3.addToLibrary(myLibrary);
book4 = new Book("Srephen Hawkings", "Story of Time", 300, false);
book4.addToLibrary(myLibrary);


function render() {
  let divtable = document.getElementById("div-table");
  let mytable = document.createElement("table");

  for (var i = 0; i < myLibrary.length; i++){
    console.log(myLibrary[i]);
    let row = document.createElement("tr");
    let cellauthor = document.createElement("td");
    let textauthor = document.createTextNode(myLibrary[i].author);
    cellauthor.appendChild(textauthor);
    let celltitle=document.createElement("td");
    let texttitle=document.createTextNode(myLibrary[i].title);
    celltitle.appendChild(texttitle);
    let cellpages=document.createElement("td");
    let textpages=document.createTextNode(myLibrary[i].pages);
    cellpages.appendChild(textpages);
    let cellread=document.createElement("td");
    let textread=document.createTextNode(myLibrary[i].read);
    cellread.appendChild(textread);

    row.appendChild(cellauthor);
    row.appendChild(celltitle);
    row.appendChild(cellpages);
    row.appendChild(textread);

    mytable.appendChild(row);

  }
  divtable.appendChild(mytable);
}

render();

function formRender() {
  let formBase = document.getElementById("form");

  let newBookForm = document.createElement("FORM");
  newBookForm.setAttribute("id","myForm");
  formBase.appendChild(newBookForm);

  let authorInput = document.createElement("INPUT");
  authorInput.setAttribute("id", "authorField")
  authorInput.setAttribute("type", "text");
  authorInput.setAttribute("placeholder", "Anonymous");
  newBookForm.appendChild(authorInput);

  let titleInput = document.createElement("INPUT");
  titleInput.setAttribute("id", "titleField");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("placeholder", "Anonymous's book");
  newBookForm.appendChild(titleInput);

  let pagesInput = document.createElement("INPUT");
  pagesInput.setAttribute("id", "pagesField");
  pagesInput.setAttribute("type", "number");
  pagesInput.setAttribute("placeholder", "200");
  newBookForm.appendChild(pagesInput);

  let readInput = document.createElement("INPUT")
  readInput.setAttribute("id", "readChk");
  readInput.setAttribute("type", "checkbox");
  newBookForm.appendChild(readInput);

  let submitButton = document.createElement("Button")
  submitButton.addEventListener("click",formCapture);
  submitButton.textContent= "Submit";
  submitButton.setAttribute("type", "button");
  
  newBookForm.appendChild(submitButton);
}

function formCapture(){
   //get values
  const author = document.getElementById("authorField").value;
  const title = document.getElementById("titleField").value;
  const pages = document.getElementById("pagesField").value;
  const read = document.getElementById("readChk").checked;

  newBook = new Book(author, title, pages, read);
  newBook.addToLibrary(myLibrary);

  //add to table
  let divtable = document.getElementById("div-table");
  divtable.innerHTML = "";
  render();

}