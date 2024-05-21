class Loan {
    constructor(principal,interestrate, duration) {
        this.principal = principal;
        this.interestrate = interestrate;
        this.duration = duration;
        this.type = null;
    }

    calculateInterest(type) {
        if(type === "simple") {
            this.type = "simple";
            return this.principal * this.interestrate * this.duration;
        }   
        if(type === "compound") {
            this.type = "compound";
            return this.principal * Math.pow((1 + this.interestrate), this.duration);
        }
    }

    calculateAmountOwed() {
        return this.principal + this.calculateInterest(this.type);
    }
}

let loan = new Loan(1000, 0.1, 2);
loan.calculateInterest("simple");
console.log(loan.calculateAmountOwed());