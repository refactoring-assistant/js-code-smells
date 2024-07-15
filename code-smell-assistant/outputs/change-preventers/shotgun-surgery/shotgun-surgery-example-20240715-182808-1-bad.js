// AI-generated code smell for Shotgun-Surgery
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

In the above example, making changes in how details are printed would involve making changes to the printDetails functions in several places - i.e., in User, Admin, and Vendor classes. This is a clear example of the Shotgun Surgery code smell.