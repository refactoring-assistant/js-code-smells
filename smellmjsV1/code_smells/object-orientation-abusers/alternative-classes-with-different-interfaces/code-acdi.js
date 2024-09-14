class Add {
    constructor(addend1, addend2) {
        this.addend1 = addend1;
        this.addend2 = addend2;
    }

    displayAddition() {
        return `${this.addend1} + ${this.addend2}`;
    }

    displayAdditionSymbol() {
        return `+`;
    }

    addAddends() {
        return this.addend1 + this.addend2;
    }
}

class Subtract {
    constructor(subtrahend, minuend) {
        this.subtrahend = subtrahend;
        this.minuend = minuend;
    }

    displaySubtraction() {
        return `${this.subtrahend} - ${this.minuend}`;
    }

    displaySubtractionSymbol() {
        return `-`;
    }

    subtractSubtrahendMinuend() {
        return this.subtrahend - this.minuend;
    }
}

class Multiply {
    constructor(factor1, factor2) {
        this.factor1 = factor1;
        this.factor2 = factor2;
    }

    displayMultiplication() {
        return `${this.factor1} * ${this.factor2}`;
    }

    displayMultiplicationSymbol() {
        return `*`;
    }

    multiplyFactors() {
        return this.factor1 * this.factor2;
    }
}

class Divide {
    constructor(dividend, divisor) {
        this.dividend = dividend;
        this.divisor = divisor;
    }

    displayDivision() {
        return `${this.dividend} / ${this.divisor}`;
    }

    displayDivisionSymbol() {
        return `/`;
    }

    divideDividenDivisor() {
        return this.dividend / this.divisor;
    }
}

let add = new Add(1, 2);
console.log(add.displayAddition());
console.log(add.displayAdditionSymbol());
console.log(add.addAddends());

let subtract = new Subtract(2, 1);
console.log(subtract.displaySubtraction());
console.log(subtract.displaySubtractionSymbol());
console.log(subtract.subtractSubtrahendMinuend());

let multiply = new Multiply(2, 3);
console.log(multiply.displayMultiplication());
console.log(multiply.displayMultiplicationSymbol());
console.log(multiply.multiplyFactors());

let divide = new Divide(6, 2);
console.log(divide.displayDivision());
console.log(divide.displayDivisionSymbol());
console.log(divide.divideDividenDivisor());

