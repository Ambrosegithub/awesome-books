/* eslint-disable no-unused-vars, no-undef, no-return-assign */
class UI {
    static displayBooks() {
      const addButton = document.getElementById('add');
      const booksUL = document.getElementById('books');
      const { allBooks } = Storage;
  
      allBooks.forEach((book, index) => {
        const li = document.createElement('li');
        if (index % 2 === 0) {
          li.classList.add('orange');
        } else {
          li.classList.add('lightblue');
        }
        li.innerHTML = `
                 <div>
                    <h3>"${book.title}" </h3>
                    <span> by ${book.author}</span>
                  </div> 
                  <button data-id="${book.id}" type="button">Remove</button>
              `;
  
        booksUL.appendChild(li);
      });
  
      
      addButton.addEventListener('click', UI.addBook);
      Navbar.show();
      booksUL.addEventListener('click', (event) => UI.remove(event));
    }
  
    static addBook(event) {
      event.preventDefault();
  
      if (UI.formIsValid('form input')) {
        const form = document.