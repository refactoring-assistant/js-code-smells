class Product {
    constructor(id, name, price, quantity, author, pages, color, size) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.author = author;
        this.pages = pages;
        this.color = color;
        this.size = size;
    }

    getBookDetails() {
        return `Book ID: ${this.id}, Name: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}, Author: ${this.author}, Pages: ${this.pages}`
    }

    getShirtDetails() {
        return `Shirt ID: ${this.id}, Name: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}, Color: ${this.color}, Size: ${this.size}`
    }
}