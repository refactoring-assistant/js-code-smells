class Rectangle {
  // Constructor for Rectangle class
  constructor(width, height) {
    // Initialize width
    this.width = width;
    // Initialize height
    this.height = height;
  }

  // Method to calculate area of the rectangle
  calculateArea() {
    // Multiply width and height to get the area
    return this.width * this.height;
  }

  // Method to calculate perimeter of the rectangle
  calculatePerimeter() {
    // Calculate perimeter using the formula 2 * (width + height)
    return 2 * (this.width + this.height);
  }
}

const rect = new Rectangle(10, 5);
console.log(`Area: ${rect.calculateArea()}`); // Log the area of the rectangle
console.log(`Perimeter: ${rect.calculatePerimeter()}`); // Log the perimeter of the rectangle
