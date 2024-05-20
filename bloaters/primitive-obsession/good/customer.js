class Address {
  constructor(street) {
    this.street = street;
  }

  toString() {
    return this.street;
  }
}

class ContactInfo {
  constructor(phone, email) {
    this.phone = phone;
    this.email = email;
  }

  toString() {
    return `${this.phone}, ${this.email}`;
  }
}

class Customer {
  constructor(id, name, address, contactInfo) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.contactInfo = contactInfo;
  }

  updateAddress(newAddress) {
    this.address = new Address(newAddress);
  }

  toString() {
    return `${this.name}, ${this.address}, ${this.contactInfo}`;
  }
}

class CustomerManager {
  constructor() {
    this.customers = [];
  }

  addCustomer(id, name, address, phone, email) {
    const customer = new Customer(
      id,
      name,
      new Address(address),
      new ContactInfo(phone, email)
    );
    this.customers.push(customer);
  }

  updateCustomerAddress(id, newAddress) {
    const customer = this.customers.find((c) => c.id === id);
    if (customer) {
      customer.updateAddress(newAddress);
    }
  }

  getCustomerInfo(id) {
    const customer = this.customers.find((c) => c.id === id);
    return customer ? customer.toString() : null;
  }
}

const customerManager = new CustomerManager();
customerManager.addCustomer(
  1,
  'John Doe',
  '123 Main St',
  '555-1234',
  'john@example.com'
);
customerManager.addCustomer(
  2,
  'Amara Olu',
  '456 Oak St',
  '555-5678',
  'amara@example.com'
);

console.log(customerManager.getCustomerInfo(1));
customerManager.updateCustomerAddress(1, '789 Elm St');
console.log(customerManager.getCustomerInfo(1));
