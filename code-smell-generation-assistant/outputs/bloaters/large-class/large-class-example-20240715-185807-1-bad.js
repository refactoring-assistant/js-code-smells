// AI-generated code smell for Large-Class
class Library {
  constructor() {
    this.books = [];
    this.members = [];
  }

  addBook(title, author, genre, year) {
    const book = { title, author, genre, year };
    this.books.push(book);
  }

  removeBook(title) {
    this.books = this.books.filter((book) => book.title !== title);
  }

  findBook(title) {
    return this.books.find((book) => book.title === title);
  }

  listBooksByAuthor(author) {
    return this.books.filter((book) => book.author === author);
  }

  listBooksByGenre(genre) {
    return this.books.filter((book) => book.genre === genre);
  }

  listAllBooks() {
    return this.books;
  }

  addMember(name, address, phone) {
    const member = { name, address, phone };
    this.members.push(member);
  }

  removeMember(name) {
    this.members = this.members.filter((member) => member.name !== name);
  }

  findMember(name) {
    return this.members.find((member) => member.name === name);
  }

  listAllMembers() {
    return this.members;
  }

  borrowBook(title, memberName) {
    const book = this.findBook(title);
    const member = this.findMember(memberName);
    if (book && member) {
      member.borrowedBooks ? member.borrowedBooks.push(book) : (member.borrowedBooks = [book]);
      this.removeBook(title);
    }
  }

  returnBook(title, memberName) {
    const member = this.findMember(memberName);
    if (member) {
      const bookIndex = member.borrowedBooks.findIndex((book) => book.title === title);
      if (bookIndex > -1) {
        const returnedBook = member.borrowedBooks.splice(bookIndex, 1)[0];
        this.addBook(returnedBook.title, returnedBook.author, returnedBook.genre, returnedBook.year);
      }
    }
  }
}