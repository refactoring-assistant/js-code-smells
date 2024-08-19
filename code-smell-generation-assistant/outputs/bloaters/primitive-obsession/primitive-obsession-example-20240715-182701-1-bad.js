const orders = [];
let orderID = 1;

function addOrder(productID, quantity, customerName, customerAddress) {
  const order = { orderID, productID, quantity, customerName, customerAddress };
  orders.push(order);
  orderID += 1;
}

function getCustomerOrders(customerName) {
  return orders.filter((o) => o.customerName === customerName);
}

addOrder(101, 2, 'Alice', '123 Main St');
addOrder(102, 1, 'Bob', '456 Oak St');
addOrder(103, 5, 'Charlie', '789 Elm St');

console.log(getCustomerOrders('Alice'));