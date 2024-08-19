class CustomerManager {
  constructor() {
    this.customers = [];
  }

  addCustomer(id, name, address, phone, email) {
    const customer = { id, name, address, phone, email };
    this.customers.push(customer);
  }

  updateCustomerAddress(id, newAddress) {
    const customer = this.customers.find((c) => c.id === id);
    if (customer) {
      customer.address = newAddress;
    }
  }

  getCustomerInfo(id) {
    const customer = this.customers.find((c) => c.id === id);
    return customer
      ? `${customer.name}, ${customer.address}, ${customer.phone}, ${customer.email}`
      : null;
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
  'Jane Smith',
  '456 Oak St',
  '555-5678',
  'jane@example.com'
);

console.log(customerManager.getCustomerInfo(1));
customerManager.updateCustomerAddress(1, '789 Elm St');
console.log(customerManager.getCustomerInfo(1));
