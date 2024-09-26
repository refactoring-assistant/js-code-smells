class Product {
  constructor(id, name, price, quantity) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  setBookDetails(author, pages) {
    this.author = author;
    this.pages = pages;
  }

  getBookDetails() {
    if (this.author && this.pages) {
      return `Book ID: ${this.id}, Name: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}, Author: ${this.author}, Pages: ${this.pages}`;
    } else {
      return 'No book details available.';
    }
  }

  setShirtDetails(color, size) {
    this.color = color;
    this.size = size;
  }

  getShirtDetails() {
    if (this.color && this.size) {
      return `Shirt ID: ${this.id}, Name: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}, Color: ${this.color}, Size: ${this.size}`;
    } else {
      return 'No shirt details available.';
    }
  }
}

const product1 = new Product(1, 'The Great Gatsby', 15, 10);
product1.setBookDetails('F. Scott Fitzgerald', 180);

const product2 = new Product(2, 'Casual T-Shirt', 25, 50);
product2.setShirtDetails('Red', 'L');

console.log(product1.getBookDetails());
console.log(product2.getShirtDetails());
