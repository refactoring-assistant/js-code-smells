class User {
    constructor(name, age, cc_details) {
        this.name = name;
        this.age = age;
        this.cc_details = cc_details;
    }

    printUserDetails()  {
        console.log(`Name: ${this.name}`)
        console.log(`Age: ${this.age}`);
        console.log(`CC Number: ${this.cc_details.getCCNumber()}`);
        console.log(`CC Expiry: ${this.cc_details.getCCExpiry()}`);
        console.log(`CC Network: ${this.cc_details.getCCNetwork()}`);
        // The user class is very dependent on the CreditCard object in this scenario.
    }
}


class CreditCard {
    constructor(cc_number, cc_expiry, cc_network) {
        this.cc_number = cc_number;
        this.cc_expiry = cc_expiry;
        this.cc_network = cc_network;
    }

    getCCNumber() {
        return this.cc_number;
    }

    getCCExpiry() {
        return this.cc_expiry;
    }
    
    getCCNetwork() {
        return this.cc_network;
    }
}

const creditcard = new CreditCard('1234567890', '12/25', 'VISA');
const user = new User('John Doe', 25, creditcard);
user.printUserDetails();