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


divtable = document.querySelector("#div-table");
console.log(divtable.id);
mytable = document.createElement("table");
for (var i = 0; i < myLibrary.length; i++){
    console.log(myLibrary[i]);
    row = document.createElement("tr");
    cellauthor=document.createElement("td");
    textauthor=document.createTextNode(myLibrary[i].author);
    cellauthor.appendChild(textauthor);
    celltitle=document.createElement("td");
    texttitle=document.createTextNode(myLibrary[i].title);
    celltitle.appendChild(texttitle);
    cellpages=document.createElement("td");
    textpages=document.createTextNode(myLibrary[i].pages);
    cellpages.appendChild(textpages);
    cellread=document.createElement("td");
    textread=document.createTextNode(myLibrary[i].read);
    cellread.appendChild(textread);

    row.appendChild(cellauthor);
    row.appendChild(celltitle);
    row.appendChild(cellpages);
    row.appendChild(textread);

    mytable.appendChild(row);

}

divtable.appendChild(mytable);