// AI Generated Primitive Obsession Example

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  calculateArea() {
    // Using magic number PI
    return 3.14159 * Math.pow(this.radius, 2);
  }

  calculateCircumference() {
    // Using magic number PI
    return 2 * 3.14159 * this.radius;
  }
}

const circle = new Circle(5);
console.log(circle.calculateArea());
console.log(circle.calculateCircumference());