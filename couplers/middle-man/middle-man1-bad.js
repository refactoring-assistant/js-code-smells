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

class Order {

    #bill;
    constructor(bill) {
        this.#bill = bill;
    }
    // This class deals with only the bill object, delegating the method calls to the bill object.

    getBillAmount() {
        return this.#bill.getAmount();
    }

    getBillItemCount() {
        return this.#bill.getItemCount();
    }
}

class Customer {
    constructor(name, order) {
        this.name = name;
        this.order = order;
    }

    printCustomerOrderDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Bill Amount: ${this.order.getBillAmount()}`);
        console.log(`Bill Item Count: ${this.order.getBillItemCount()}`);
    }
}

const bill = new Bill(100, 5);
const order = new Order(bill);
const customer = new Customer('John Doe', order);

customer.printCustomerOrderDetails();