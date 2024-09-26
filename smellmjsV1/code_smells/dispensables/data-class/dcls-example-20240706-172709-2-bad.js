class Order {
  constructor(orderId, product, quantity) {
    this.orderId = orderId;
    this.product = product;
    this.quantity = quantity;
  }
}

let order1 = new Order(101, "Book", 2);
console.log(order1.orderId);
console.log(order1.product);
console.log(order1.quantity);