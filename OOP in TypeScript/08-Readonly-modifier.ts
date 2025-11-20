class Book{
    readonly title:string;
    readonly author:string;

    constructor(title:string, author:string){
        this.author = author;
        this.title = title;
    }

}

const book = new Book("1984", "George Orwell");

console.log(`${book.title} by ${book.author}`);

// book.title = "Brave New World"; 
// book.author = "Terry Pratchet";