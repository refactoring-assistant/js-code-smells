// AI-generated code smell for Alternative-Classes-With-Different-Interfaces

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    calculateCircumference() {
        return 2 * Math.PI * this.radius;
    }
}

class Square {
    constructor(side) {
        this.side = side;
    }

    getArea() {
        return this.side * this.side;
    }

    getPerimeter() {
        return 4 * this.side;
    }
}