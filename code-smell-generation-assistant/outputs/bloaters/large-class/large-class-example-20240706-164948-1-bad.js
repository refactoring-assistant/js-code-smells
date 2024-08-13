
class GroceryStore {
    constructor() {
      this.products = [];
      this.customers = [];
    }
  
    addProduct(id, name, price) {
      const product = { id, name, price };
      this.products.push(product);
    }
  
    removeProduct(id) {
      this.products = this.products.filter((product) => product.id !== id);
    }
  
    getProduct(id) {
      return this.products.find((product) => product.id === id);
    }
  
    addCustomer(id, name, email) {
      const customer = { id, name, email };
      this.customers.push(customer);
    }
  
    removeCustomer(id) {
      this.customers = this.customers.filter((customer) => customer.id !== id);
    }
  
    getCustomer(id) {
      return this.customers.find((customer) => customer.id === id);
    }
  
    calculateProfit() {
      console.log("Calculating profit...");
      return 100000;
    }
  
    createPromotion(product, discount) {
      console.log(`Creating promotion for product ${product}: discount of ${discount}%`);
    }
  
    cancelPromotion(promotion) {
      console.log(`Canceling promotion ${promotion}`);
    }
  
    generateSalesReport() {
      console.log("Generating sales report...");
    }
  
    generateInventoryReport() {
      console.log("Generating inventory report...");
    }
}

const groceryStore = new GroceryStore();
groceryStore.addProduct(1, 'Milk', 2.99);
groceryStore.addCustomer(1, 'John Doe', 'johndoe@example.com');
groceryStore.createPromotion('Milk', 10);
groceryStore.calculateProfit();
groceryStore.removeProduct(1);