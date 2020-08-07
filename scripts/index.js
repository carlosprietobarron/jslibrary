const myLibrary = [];
let bookId = 0;

function arrayObjectIndexOf(myArray, searchTerm, property) {
  let i = 0;
  let len = 0;
  for (i = 0, len = myArray.length; i < len; i += 1) {
    if (myArray[i][property] === parseInt(searchTerm, 10)) return i;
  }
  return -1;
}

function Book(author, title, pages, read) {
  this.id = bookId;
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
  bookId += 1;
}

Book.prototype.addToLibrary = function pusher(library) {
  library.push(this);
};

Book.getIndex = function some(library, id) {
  const index = arrayObjectIndexOf(library, id, 'id');
  return index;
};

const book1 = new Book('Issac Assimov', 'The Foundation', 200, false);
book1.addToLibrary(myLibrary);
const book2 = new Book('Brian Green', 'The Elegant Universe', 450, false);
book2.addToLibrary(myLibrary);
const book3 = new Book('Pablo Cohelo', 'The Alchemist', 230, true);
book3.addToLibrary(myLibrary);
const book4 = new Book('Srephen Hawkings', 'Story of Time', 300, false);
book4.addToLibrary(myLibrary);

function deleteRow(index) {
  document.getElementById(index).remove();
}

function removeBook(evt) {
  let target = evt.target.param;
  const book = evt.target.bookId;
  const thisRow = evt.target.row;
  target = Book.getIndex(myLibrary, book);
  myLibrary.splice(target, 1);
  deleteRow(thisRow);
}

function updateRead(evt) {
  let target = evt.target.param;
  const book = evt.target.bookId;
  const thisRow = evt.target.row;
  const rowToUp = document.getElementById(thisRow);
  target = Book.getIndex(myLibrary, book);
  myLibrary[target].read = !myLibrary[target].read;
  const newValue = !myLibrary[target].read;
  rowToUp.childNodes[3].textContent = newValue;
}

const removeBtn = function removal(row, index) {
  const cellBtn = document.createElement('button');
  cellBtn.addEventListener('click', removeBook);
  cellBtn.setAttribute('type', 'Button');
  cellBtn.setAttribute('id', `btn-${index}`);
  cellBtn.textContent = 'Remove';
  cellBtn.param = index;
  cellBtn.row = row.getAttribute('id');
  cellBtn.bookId = row.getAttribute('bookId');
  row.appendChild(cellBtn);
};

const readButton = function reader(row, index) {
  const cellBtn = document.createElement('button');
  cellBtn.addEventListener('click', updateRead);
  cellBtn.setAttribute('type', 'Button');
  cellBtn.setAttribute('id', `btn-${index}`);
  cellBtn.textContent = 'Read';
  cellBtn.param = index;
  cellBtn.row = row.getAttribute('id');
  cellBtn.bookId = row.getAttribute('bookId');
  row.appendChild(cellBtn);
};

function render() {
  const divtable = document.getElementById('div-table');
  const mytable = document.createElement('table');
  // add headers
  const header = mytable.createTHead();
  const hdRow = header.insertRow();
  const cellAuthor = hdRow.insertCell(0);
  cellAuthor.innerHTML = 'Author';
  const celltitle = hdRow.insertCell(1);
  celltitle.innerHTML = 'Title';
  const cellpages = hdRow.insertCell(2);
  cellpages.innerHTML = 'Pages';
  const cellRead = hdRow.insertCell(3);
  cellRead.innerHTML = 'Read';

  for (let i = 0; i < myLibrary.length; i += 1) {
    const row = document.createElement('tr');
    // row.setAttribute("id", "row-", i);
    row.setAttribute('id', `${i}`);
    row.setAttribute('bookId', myLibrary[i].id);
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
    cellread.setAttribute('id', `read-${i}`);
    const textread = document.createTextNode(myLibrary[i].read);
    cellread.appendChild(textread);

    row.appendChild(cellauthor);
    row.appendChild(celltitle);
    row.appendChild(cellpages);
    row.appendChild(cellread);
    removeBtn(row, i);
    readButton(row, i);

    mytable.appendChild(row);
  }
  divtable.appendChild(mytable);
}

function update() {
  const divtable = document.getElementById('div-table');
  divtable.innerHTML = '';
  render();
}

render();

function formCapture() {
  // get values
  const author = document.getElementById('authorField').value;
  const title = document.getElementById('titleField').value;
  const pages = document.getElementById('pagesField').value;
  const read = document.getElementById('readChk').checked;

  const newBook = new Book(author, title, pages, read);
  newBook.addToLibrary(myLibrary);

  // add to table
  const divForm = document.getElementById('form');
  divForm.innerHTML = '';
  update();
}

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

formRender();
document.getElementById('form').innerHTML = '';
