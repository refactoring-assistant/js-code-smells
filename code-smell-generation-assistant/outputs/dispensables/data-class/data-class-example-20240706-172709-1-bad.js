// AI-generated code smell for Data-Class

class Customer {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
}

let john = new Customer("John Doe", "London");
console.log(john.name);
console.log(john.address);