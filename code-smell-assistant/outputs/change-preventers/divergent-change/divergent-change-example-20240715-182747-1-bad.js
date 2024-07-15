// AI-generated code smell for Divergent-Change
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

This shows a Divergent change as the Order class has more than one reason to change. If any invoice formatting changes, the `printInvoice` changes. If the pricing calculation method changes the `calculateTotalPrice` changes. These are logically different changes, indicating that the class has more than one responsibility leading to divergent change, breaking the SRP principle.