class Customer {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }

    printCustomerDetails() {
        console.log(`Name: ${this.name}`);
        this.address.printAddressDetails();
    }
}

class Address {
    #street;
    #city;
    #state;
    // Made the instance variables private to reduce dependency on instance variables in the address class.
    constructor(street, city, state) {
        this.#street = street;
        this.#city = city;
        this.#state = state;
    }

    // Added a public method to print the address details instead of accessing the instance variables directly.
    printAddressDetails() {
        console.log(`Street: ${this.#street}`);
        console.log(`City: ${this.#city}`);
        console.log(`State: ${this.#state}`);
    }
}

const address = new Address('123 Main St', 'Boston', 'MA');
const customer = new Customer('John Doe', address);
customer.printCustomerDetails();