class ProductManager {
  constructor() {
    this.products = [];
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

  updateProduct(id, name, price) {
    this.products = this.products.map(product =>
      product.id === id ? { id, name, price } : product
    );
  }

  calculateTotalPrice() {
    return this.products.reduce((total, product) => total + product.price, 0);
  }

  sortProductsByPrice() {
    return this.products.sort((a, b) => a.price - b.price);
  }

  showProductDetails(id) {
    const product = this.getProduct(id);
    console.log(`Product: ${product.name}, Price: ${product.price}`);
  }

  applyDiscount(id, discount) {
    const product = this.getProduct(id);
    product.price = product.price - product.price * discount / 100;
    this.updateProduct(product.id, product.name, product.price);
    return `The new price of product: ${product.name} after a discount of ${discount}% is ${product.price}`;
  }
}

const productManager = new ProductManager();
productManager.addProduct(1, 'Shirt', 20);
productManager.addProduct(2, 'Pants', 30);
productManager.showProductDetails(1);
console.log(productManager.applyDiscount(1, 10));
productManager.removeProduct(1);