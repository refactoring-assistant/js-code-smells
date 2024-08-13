class Customer {
    getDiscount() {
        return this.order.getDiscount();
    }
}

class Order {
    getDiscount() {
        return this.discountCalculator.calculateDiscount();
    }
}

class DiscountCalculator {
    calculateDiscount() {
        // actual discount calculation logic
    }
}