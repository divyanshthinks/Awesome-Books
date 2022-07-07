const books = [
    {
       title: "Harry",
       author: "jk"
    }
];

const deletebook = (event) => {
  const indexn = event.currentTarget.dataset.index; 
  books.splice(parseInt(deletebook),1);
  additems();
}

const creatli = document.getElementById("list-cr");

function additems () {
    let cards = '';
    for(let i = 0; i<books.length; i++) {
        const items = `
        <ul>
        <li>${books[i].title}</li>
        <li>${books[i].author}</li>
        <button data-index = "${i}" class="remove">remove</button>
        </ul>
        `;

        cards += items;
    }

    creatli.innerHTML=cards;

    document.querySelectorAll('.remove').forEach((element) => 
    element.addEventListener('click', deletebook));
}

additems();

const titin = document.getElementById("title");
const autna = document.getElementById("author");


function addBook() {

    const book = {};
    book.title = titin.value;
    book.author = autna.value;
    books.push(book);
    additems();
}

const btnadd = document.getElementById("add");

btnadd.addEventListener('click', addBook);



