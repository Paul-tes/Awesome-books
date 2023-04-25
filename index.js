import Store from "./Store";

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class UI {
  static displayBooks() {
    const books = Store.getBooks();
    books.forEach((book) => UI.addBookList(book));

  }

  static addBookList(book) {
    const table = document.getElementById('book-list');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <tr class="book-list-item">
      <td class="title">${book.title} by ${book.author}</td>
      <td class="remove-td-btn"><button class="remove-btn">remove</button></td>
    </tr>
    `;
    table.appendChild(tr);
  }

  static removeBook(elem) {
    if(elem.classList.contains('remove-btn')) {
      elem.parentElement.parentElement.remove();
    }
  }

  static clearInput() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}

// add book 
const addBtn = document.querySelector('#add-btn');
addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  
  if(title === '' || author === '') {
    alert('please insert all values');
  } else {
    const book = new Book(title, author);
    UI.addBookList(book);
    Store.addBook(book);
    UI.clearInput();
  }
})

//display Books in a table
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// remove book
document.querySelector('#book-list').addEventListener('click', (e)=> { // evenrt propagation
  UI.removeBook(e.target);
  const td = e.target.parentElement.previousElementSibling.textContent;
  title = td.substr(0, td.indexOf(' by '));
  Store.removeBook(title);
})