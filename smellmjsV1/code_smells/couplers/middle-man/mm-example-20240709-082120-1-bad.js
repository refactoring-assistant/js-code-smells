class Customer {
  getDiscount() {
    return this.order.getDiscount();
  }

  getOrderTotal() {
    return this.order.getOrderTotal();
  }

  getOrderDate() {
    return this.order.getOrderDate();
  }

  setOrder(order) {
    this.order = order;
  }
}

class Order {
  getDiscount() {
    return this.discountCalculator.calculateDiscount();
  }

  getOrderTotal() {
    return this.pricing.calculateTotal();
  }

  getOrderDate() {
    return this.orderDate;
  }

  setDiscountCalculator(discountCalculator) {
    this.discountCalculator = discountCalculator;
  }

  setPricing(pricing) {
    this.pricing = pricing;
  }

  setOrderDate(orderDate) {
    this.orderDate = orderDate;
  }
}

class DiscountCalculator {
  calculateDiscount() {
    return 10;
  }
}

class Pricing {
  calculateTotal() {
    return 100;
  }
}

const discountCalculator = new DiscountCalculator();
const pricing = new Pricing();
const order = new Order();
const customer = new Customer();

order.setDiscountCalculator(discountCalculator);
order.setPricing(pricing);
order.setOrderDate('2024-09-14');

customer.setOrder(order);

console.log(customer.getDiscount());
console.log(customer.getOrderTotal());
console.log(customer.getOrderDate());
