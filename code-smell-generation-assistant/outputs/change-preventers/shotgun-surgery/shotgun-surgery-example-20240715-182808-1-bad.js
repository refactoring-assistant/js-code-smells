
class User {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    printDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`);
    }
}

class Admin {
    constructor(name, age, email, role) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.role = role;
    }

    printDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Email: ${this.email}, Role: ${this.role}`);
    }
}

class Vendor {
    constructor(name, age, email, company) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.company = company;
    }

    printDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Email: ${this.email}, Company: ${this.company}`);
    }
}