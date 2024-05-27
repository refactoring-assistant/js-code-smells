// Since these operations had a similar method responsibility, we can refactor them to have a common interface.
class Operation {
    displayOperation() {
        throw new Error('Subclasses have to implement the method displayOperation!');
    }

    displayOperationSymbol() {
        throw new Error('Subclasses have to implement the method displayOperationSymbol!');
    }

    performOperation() {    
        throw new Error('Subclasses have to implement the method performOperation!');
    }
}

class Add extends Operation {
    constructor(addend1, addend2) {
        super();
        this.addend1 = addend1;
        this.addend2 = addend2;
    }

    displayOperation() {
        return `${this.addend1} + ${this.addend2}`;
    }

    displayOperationSymbol() {
        return `+`;
    }

    performOperation() {
        return this.addend1 + this.addend2;
    }
}

class Subtract extends Operation {
    constructor(subtrahend, minuend) {
        super();
        this.subtrahend = subtrahend;
        this.minuend = minuend;
    }

    displayOperation() {
        return `${this.subtrahend} - ${this.minuend}`;
    }

    displayOperationSymbol() {
        return `-`;
    }

    performOperation() {
        return this.subtrahend + this.minuend;
    }
}

class Multiply extends Operation {
    constructor(factor1, factor2) {
        super();
        this.factor1 = factor1;
        this.factor2 = factor2;
    }

    displayOperation() {
        return `${this.factor1} * ${this.factor2}`;
    }

    displayOperationSymbol() {
        return `*`;
    }

    performOperation() {
        return this.factor1 * this.factor2;
    }
}

class Divide extends Operation{
    constructor(dividend, divisor) {
        super();
        this.dividend = dividend;
        this.divisor = divisor;
    }

    displayOperation() {
        return `${this.dividend} / ${this.divisor}`;
    }

    displayOperationSymbol() {
        return `/`;
    }

    performOperation() {
        return this.dividend / this.divisor;
    }
}

let add = new Add(1, 2);
console.log(add.displayOperation());
console.log(add.displayOperationSymbol());
console.log(add.performOperation());

let subtract = new Subtract(2, 1);
console.log(subtract.displayOperation());
console.log(subtract.displayOperationSymbol());
console.log(subtract.performOperation());

let multiply = new Multiply(2, 3);
console.log(multiply.displayOperation());
console.log(multiply.displayOperationSymbol());
console.log(multiply.performOperation());

let divide = new Divide(6, 2);
console.log(divide.displayOperation());
console.log(divide.displayOperationSymbol());
console.log(divide.performOperation());

