class Bill {
    constructor(amount, itemcount) {
        this.amount = amount;
        this.itemcount = itemcount;
    }

    getAmount() {
        return this.amount;
    }

    getItemCount() {
        return this.itemcount;
    }
}


class Customer {
    constructor(name, bill) {
        this.name = name;
        this.bill = bill;
    }

    printCustomerOrderDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Bill Amount: ${this.bill.getAmount()}`);
        console.log(`Bill Item Count: ${this.bill.getItemCount()}`);
    }
}

const bill = new Bill(100, 5);
const customer = new Customer('John Doe', bill);

customer.printCustomerOrderDetails();