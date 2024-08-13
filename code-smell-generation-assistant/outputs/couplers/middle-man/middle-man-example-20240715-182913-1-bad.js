class Customer {
    constructor(bank) {
        this.bank = bank;
    }
    getBalance() {
        return this.bank.getBalance();
    }
}

class Bank {
    getBalance() {
        // complicated calculation or database query
        return 1000;
    }
}
const bank = new Bank();
const cust = new Customer(bank);
console.log(cust.getBalance());
