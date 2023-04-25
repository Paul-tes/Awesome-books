class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// ui class
class UI {
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
}
