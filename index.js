class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// ui class
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
