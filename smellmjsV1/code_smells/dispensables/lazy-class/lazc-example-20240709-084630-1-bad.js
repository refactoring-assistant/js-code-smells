class MathOperations {
  constructor(number1, number2) {
    this.number1 = number1;
    this.number2 = number2;
  }

  addNumbers() {
    return this.number1 + this.number2;
  }
}

let operation = new MathOperations(5, 10);
console.log(operation.addNumbers());

let number1 = 5;
let number2 = 10;
console.log(number1 + number2);
