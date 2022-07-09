let books = [];
if (localStorage.books) books = JSON.parse(localStorage.getItem('books'));

const creatli = document.getElementById('list-cr');

function additems() {
  let cards = '';
  for (let i = 0; i < books.length; i += 1) {
    const items = `
        <ul>
        <li>${books[i].title}</li>
        <li>${books[i].author}</li>
        <button data-index = "${i}" class="remove">remove</button>
        </ul>
        <hr>
        `;

    cards += items;
  }

  creatli.innerHTML = cards;

  document.querySelectorAll('.remove').forEach((element) => element.addEventListener('click', (event) => {
    const indexn = event.currentTarget.dataset.index;
    books.splice(parseInt(indexn, 5), 1);
    additems();
    localStorage.setItem('books', JSON.stringify(books));
  }));
}

additems();

const titin = document.getElementById('title');
const autna = document.getElementById('author');

function addBook() {
  const book = {};
  book.title = titin.value;
  book.author = autna.value;
  books.push(book);
  additems();
  localStorage.setItem('books', JSON.stringify(books));
}

const btnadd = document.getElementById('add');

btnadd.addEventListener('click', addBook);
