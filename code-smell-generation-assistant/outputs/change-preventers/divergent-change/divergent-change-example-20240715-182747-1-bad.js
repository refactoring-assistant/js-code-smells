class Order {
    constructor(customer, details) {
        this.customer = customer;
        this.details = details;
    }

    printInvoice() {
        // Print customer details
        console.log(this.customer.name);
        console.log(this.customer.address);
        // Print order details
        this.details.forEach(detail => {
            console.log(detail.product.name);
            console.log(detail.quantity);
        });
    }

    calculateTotalPrice() {
        return this.details.reduce((total, detail) => {
            return total + (detail.product.price * detail.quantity);
        }, 0);
    }
}