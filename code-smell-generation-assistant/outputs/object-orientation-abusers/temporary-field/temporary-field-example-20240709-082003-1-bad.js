// AI-generated code smell for Temporary-Field
class ShoppingCart {
  constructor() {
    this.items = [];
    this.tempDiscount = null; // This is a temporary field
  }

  addItem(item) {
    this.items.push(item);
  }

  applyDiscount(discount) {
    this.tempDiscount = discount;
  }

  totalPrice() {
    if (this.tempDiscount !== null) {
      let total = this.items.reduce((prev, cur) => prev + cur.price, 0);
      return total - (total * (this.tempDiscount / 100));
    } else {
      return this.items.reduce((prev, cur) => prev + cur.price, 0);
    }
  }
}