//create the book 

class book {
    constructor (title,author) {
        this.title = title;
        this.author = author;
    }
}

//make UI class

class UI {
    static displayBooks() {
        const storedbooks = [
            {
                title:"book1",
                author:'nick'
            }
        ];
        const books = storedbooks;

        books.forEach((book)=UI.addBookToList (book));
    }
}

//storage class
//display books class
//add a book class
//delete a  book (from storage)

