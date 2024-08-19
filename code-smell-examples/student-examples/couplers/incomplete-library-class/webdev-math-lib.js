export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

export function power(base, exponent) {
  return Math.pow(base, exponent);
}

export function squareRoot(value) {
  if (value < 0) {
    throw new Error('Square root of negative numbers is not allowed');
  }
  return Math.sqrt(value);
}

const MathLib = {
  add,
  subtract,
  multiply,
  divide,
  power,
  squareRoot,
};

export default MathLib;
