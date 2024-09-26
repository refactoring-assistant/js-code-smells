class Shape {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.borderColor = null;
    this.backgroundColor = null;
  }

  draw() {
    console.log('Drawing a shape at', this.x, this.y);
  }

  rotate(angle) {
    console.log('Rotating the shape by', angle, 'degrees');
  }

  setBorderColor(color) {
    console.log('Setting border color to', color);
    this.borderColor = color;
  }

  setBackgroundColor(color) {
    console.log('Setting background color to', color);
    this.backgroundColor = color;
  }

  resize(factor) {
    console.log('Resizing shape by a factor of', factor);
  }
}

const shape = new Shape(10, 20);
shape.draw();
