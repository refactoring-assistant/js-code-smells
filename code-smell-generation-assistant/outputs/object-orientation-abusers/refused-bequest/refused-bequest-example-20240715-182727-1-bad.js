class Product {
    constructor(name) {
        this.name = name;
    }

    getPrice() {
        return this.price;
    }

    setPrice(price) {
        this.price = price;
    }
}

class SoftwareProduct extends Product {
    constructor(name, version) {
        super(name);
        this.version = version;
    }

    // Refused to use the setPrice() method from the parent class
    setPrice() {
        throw new Error("Cannot set price for SoftwareProduct.");
    }
}