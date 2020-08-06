const myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

Book.prototype.addToLibrary = function pusher(library) {
  library.push(this);
};

const book1 = new Book('Issac Assimov', 'The Foundation', 200, false);
book1.addToLibrary(myLibrary);
const book2 = new Book('Brian Green', 'The Elegant Universe', 450, false);
book2.addToLibrary(myLibrary);
const book3 = new Book('Pablo Cohelo', 'The Alchemist', 230, true);
book3.addToLibrary(myLibrary);
const book4 = new Book('Srephen Hawkings', 'Story of Time', 300, false);
book4.addToLibrary(myLibrary);


function removeBook(evt) {
  const target = evt.target.param;
  myLibrary.splice(target, 1);
  const divtable = document.getElementById('div-table');
  divtable.innerHTML = '';
  render();
}

function updateRead(evt) {
  const { target } = evt;
  myLibrary[target.param].read = !myLibrary[target.param].read;
  const divtable = document.getElementById('div-table');
  divtable.innerHTML = '';
  render();
}

const removeBtn = function (row, index) {
  const cellBtn = document.createElement('button');
  cellBtn.addEventListener('click', removeBook);
  cellBtn.setAttribute('type', 'Button');
  cellBtn.setAttribute('id', `btn-${index}`);
  cellBtn.textContent = 'Remove';
  cellBtn.param = index;
  row.appendChild(cellBtn);
};

const readButton = function (row, index) {
  const cellBtn = document.createElement('button');
  cellBtn.addEventListener('click', updateRead);
  cellBtn.setAttribute('type', 'Button');
  cellBtn.setAttribute('id', `btn-${index}`);
  cellBtn.textContent = 'Read';
  cellBtn.param = index;
  row.appendChild(cellBtn);
};

function render() {
  const divtable = document.getElementById('div-table');
  const mytable = document.createElement('table');

  for (let i = 0; i < myLibrary.length; i += 1) {    
    const row = document.createElement('tr');
    const cellauthor = document.createElement('td');
    const textauthor = document.createTextNode(myLibrary[i].author);
    cellauthor.appendChild(textauthor);
    const celltitle = document.createElement('td');
    const texttitle = document.createTextNode(myLibrary[i].title);
    celltitle.appendChild(texttitle);
    const cellpages = document.createElement('td');
    const textpages = document.createTextNode(myLibrary[i].pages);
    cellpages.appendChild(textpages);
    const cellread = document.createElement('td');
    const textread = document.createTextNode(myLibrary[i].read);
    cellread.appendChild(textread);

    row.appendChild(cellauthor);
    row.appendChild(celltitle);
    row.appendChild(cellpages);
    row.appendChild(textread);
    removeBtn(row, i);
    readButton(row, i);

    mytable.appendChild(row);
  }
  divtable.appendChild(mytable);
}

render();

function formRender() {
  const formBase = document.getElementById('form');
  formBase.innerHTML = '';

  const newBookForm = document.createElement('FORM');
  newBookForm.setAttribute('id', 'myForm');
  formBase.appendChild(newBookForm);

  const authorInput = document.createElement('INPUT');
  authorInput.setAttribute('id', 'authorField');
  authorInput.setAttribute('type', 'text');
  authorInput.setAttribute('placeholder', 'Anonymous');
  newBookForm.appendChild(authorInput);

  const titleInput = document.createElement('INPUT');
  titleInput.setAttribute('id', 'titleField');
  titleInput.setAttribute('type', 'text');
  titleInput.setAttribute('placeholder', "Anonymous's book");
  newBookForm.appendChild(titleInput);

  const pagesInput = document.createElement('INPUT');
  pagesInput.setAttribute('id', 'pagesField');
  pagesInput.setAttribute('type', 'number');
  pagesInput.setAttribute('placeholder', '200');
  newBookForm.appendChild(pagesInput);

  const readInput = document.createElement('INPUT');
  readInput.setAttribute('id', 'readChk');
  readInput.setAttribute('type', 'checkbox');
  newBookForm.appendChild(readInput);

  const submitButton = document.createElement('Button');
  submitButton.addEventListener('click', formCapture);
  submitButton.textContent = 'Submit';
  submitButton.setAttribute('type', 'button');

  newBookForm.appendChild(submitButton);
}

function formCapture() {
  // get values
  const author = document.getElementById('authorField').value;
  const title = document.getElementById('titleField').value;
  const pages = document.getElementById('pagesField').value;
  const read = document.getElementById('readChk').checked;

  newBook = new Book(author, title, pages, read);
  newBook.addToLibrary(myLibrary);

  // add to table
  const divtable = document.getElementById('div-table');
  const divForm = document.getElementById('form');
  divForm.innerHTML = '';
  divtable.innerHTML = '';
  render();
}