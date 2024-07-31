// AI-generated code smell for Primitive-Obsession
class Order {
  constructor() {
    this.orders = [];
  }

  addOrder(id, customerName, productName, quantity, pricePerUnit) {
    const order = { id, customerName, productName, quantity, pricePerUnit };
    this.orders.push(order);
  }

  updateOrderQuantity(id, newQuantity) {
    const order = this.orders.find((o) => o.id === id);
    if (order) {
      order.quantity = newQuantity;
    }
  }

  getOrderInfo(id) {
    const order = this.orders.find((o) => o.id === id);
    return order
      ? `${order.customerName}, ${order.productName}, ${order.quantity}, ${order.pricePerUnit}`
      : null;
  }
}

const orderManager = new Order();
orderManager.addOrder(
  1,
  'John Doe',
  'Apple',
  10,
  2
);
orderManager.addOrder(
  2,
  'Jane Smith',
  'Banana',
  5,
  1.5
);

console.log(orderManager.getOrderInfo(1));
orderManager.updateOrderQuantity(1, 15);
console.log(orderManager.getOrderInfo(1));