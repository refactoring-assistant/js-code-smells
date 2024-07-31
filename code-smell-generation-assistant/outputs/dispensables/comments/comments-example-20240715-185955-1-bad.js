// AI-generated code smell for Comments
class Calculator {
  // Method to add two numbers
  add(a, b) {
    return a + b;
  }

  // Method to subtract two numbers
  subtract(a, b) {
    return a - b;
  }

  // Method to multiply two numbers
  multiply(a, b) {
    return a * b;
  }

  // Method to divide two numbers
  divide(a, b) {
    if (b === 0) {
      throw new Error('Division by zero error');
    }
    return a / b;
  }
}