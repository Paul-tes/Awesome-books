import Book from './modules/Book.js';
import Store from './modules/Store.js';
// import { DateTime } from "luxon";

// const currnetDate = new DateTime();
// console.log(currnetDate);
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
    if (elem.classList.contains('remove-btn')) {
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
  if (title === '' || author === '') {
    // error
  } else {
    const book = new Book(title, author);
    UI.addBookList(book);
    Store.addBook(book);
    UI.clearInput();
  }
});

// display Books in a table
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// remove book
document.querySelector('#book-list').addEventListener('click', (e) => { // evenrt propagation
  UI.removeBook(e.target);
  const td = e.target.parentElement.previousElementSibling.textContent;
  const title = td.substr(0, td.indexOf(' by '));
  Store.removeBook(title);
});

// navigations
document.querySelector('.header-nav').addEventListener('click', (e) => {
  const {target: target} = e;
  const listSection = document.querySelector('#list-section');
  const addSection = document.querySelector('#add-book-section');
  const contact = document.querySelector('#contact-section');
  if (target.classList.contains('list-btn')) {
    listSection.classList.remove('display-none');
    addSection.classList.add('display-none');
    contact.classList.add('display-none');
  } else if (target.classList.contains('add-new-btn')) {
    listSection.classList.add('display-none');
    addSection.classList.remove('display-none');
    contact.classList.add('display-none');
  } else if (target.classList.contains('contact-btn')) {
    listSection.classList.add('display-none');
    addSection.classList.add('display-none');
    contact.classList.remove('display-none');
  }
});