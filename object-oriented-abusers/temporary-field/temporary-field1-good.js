// We can extract the temporary field into a separate class and override the required method in the subclass. 
// This way we can avoid using temporary fields for class and define more definitive behaviour for each object.
class InterestStrategy {
    calculateInterest(principal, interestRate, duration) {
      throw new Error('This method should be overridden by subclasses');
    }
  }
class SimpleInterestStrategy extends InterestStrategy {
  calculateInterest(principal, interestRate, duration) {
    return principal * interestRate * duration;
  }
}

class CompoundInterestStrategy extends InterestStrategy {
  calculateInterest(principal, interestRate, duration) {
    return principal * Math.pow((1 + interestRate), duration) - principal;
  }
}

class Loan {
  constructor(principal, interestRate, duration, interestStrategy) {
    this.principal = principal;
    this.interestRate = interestRate;
    this.duration = duration;
    this.interestStrategy = interestStrategy;
  }

  setInterestStrategy(interestStrategy) {
    this.interestStrategy = interestStrategy;
  }

  calculateInterest() {
    return this.interestStrategy.calculateInterest(this.principal, this.interestRate, this.duration);
  }

  calculateAmountOwed() {
    return this.principal + this.calculateInterest();
  }
}

let simpleInterestStrategy = new SimpleInterestStrategy();
let loanWithSimpleInterest = new Loan(1000, 0.1, 2, simpleInterestStrategy);
console.log(loanWithSimpleInterest.calculateAmountOwed()); // 1200

let compoundInterestStrategy = new CompoundInterestStrategy();
let loanWithCompoundInterest = new Loan(1000, 0.1, 2, compoundInterestStrategy);
console.log(loanWithCompoundInterest.calculateAmountOwed()); // 1210
