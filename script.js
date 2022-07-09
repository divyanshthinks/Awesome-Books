const creatli = document.getElementById('list-cr');


const titin = document.getElementById('title');
const autna = document.getElementById('author');

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class Bookadd {
    constructor() {
       this.books = [];
       if (localStorage.books) this.books = JSON.parse(localStorage.getItem('books'));
}

 additems() {
  let cards = '';
  for (let i = 0; i < this.books.length; i += 1) {
    const items = `
        <ul class="book-items">
        <li>${this.books[i].title} by ${this.books[i].author} </li>
        <button type="button" data-index = "${i}" class="remove"  onclick="removeBooks(event)">remove</button>
        </ul>
        `;

    cards += items;
  };

  creatli.innerHTML = cards;
}
}

const bookplus = new Bookadd;
 bookplus.additems();

function addBook() {
  const book = new Book(titin.value, autna.value);
  bookplus.books.push(book);
  bookplus.additems();
  localStorage.setItem('books', JSON.stringify(bookplus.books));
  titin.value = '';
  autna.value = '';
}

const btnadd = document.getElementById('add');

btnadd.addEventListener('click', addBook);

function removeBooks(event) {
  const getindex = event.currentTarget.dataset.index;
  bookplus.books.splice(parseInt(getindex, 5), 1);
  bookplus.additems();
  localStorage.setItem('books', JSON.stringify(bookplus.books));
}
