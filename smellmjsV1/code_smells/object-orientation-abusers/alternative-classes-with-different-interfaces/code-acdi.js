class Add {
  constructor(addend1, addend2) {
    this.addend1 = addend1;
    this.addend2 = addend2;
  }

  calculate() {
    return this.addend1 + this.addend2;
  }

  showSymbol() {
    return '+';
  }

  displayOperation() {
    return `${this.addend1} + ${this.addend2}`;
  }
}

class Subtract {
  constructor(minuend, subtrahend) {
    this.minuend = minuend;
    this.subtrahend = subtrahend;
  }

  performSubtraction() {
    return this.minuend - this.subtrahend;
  }

  getSymbol() {
    return '-';
  }

  operationDetails() {
    return `${this.minuend} - ${this.subtrahend}`;
  }
}

class Multiply {
  constructor(factor1, factor2) {
    this.factor1 = factor1;
    this.factor2 = factor2;
  }

  executeMultiplication() {
    return this.factor1 * this.factor2;
  }

  multiplicationSymbol() {
    return '*';
  }

  multiplicationInfo() {
    return `${this.factor1} * ${this.factor2}`;
  }
}

class Divide {
  constructor(dividend, divisor) {
    this.dividend = dividend;
    this.divisor = divisor;
  }

  calculateQuotient() {
    return this.dividend / this.divisor;
  }

  divisionSymbol() {
    return '/';
  }

  showDivision() {
    return `${this.dividend} / ${this.divisor}`;
  }
}

let add = new Add(5, 3);
console.log(add.displayOperation());
console.log(add.showSymbol());
console.log(add.calculate());

let subtract = new Subtract(10, 5);
console.log(subtract.operationDetails());
console.log(subtract.getSymbol());
console.log(subtract.performSubtraction());

let multiply = new Multiply(4, 7);
console.log(multiply.multiplicationInfo());
console.log(multiply.multiplicationSymbol());
console.log(multiply.executeMultiplication());

let divide = new Divide(20, 5);
console.log(divide.showDivision());
console.log(divide.divisionSymbol());
console.log(divide.calculateQuotient());
