/* replaced arrays with classes */
class Storage {
    static get allBooks() {
      const bookCollection = [];
  
      if (localStorage.getItem('mybooks')) {
        return JSON.parse(localStorage.getItem('mybooks'));
      }
  
      localStorage.setItem('mybooks', JSON.stringify(bookCollection));
      return bookCollection;
    }
  }