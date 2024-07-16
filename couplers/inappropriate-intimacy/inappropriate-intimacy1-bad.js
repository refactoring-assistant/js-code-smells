class Customer {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }

    printCustomerDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Street: ${this.address.street}`);
        console.log(`City: ${this.address.city}`);
        console.log(`State: ${this.address.state}`);
        // this class depends on the instance variables of the other class.
    }
}

class Address {
    constructor(street, city, state) {
        this.street = street;
        this.city = city;
        this.state = state;
    }
}

const address = new Address('123 Main St', 'Boston', 'MA');
const customer = new Customer('John Doe', address);
customer.printCustomerDetails();