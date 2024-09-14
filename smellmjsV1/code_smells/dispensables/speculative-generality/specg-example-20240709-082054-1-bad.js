class Shape {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    
    draw() {
        console.log('Drawing a shape at', this.x, this.y);
    }
   
    // This method might be used in the future, but it's not needed now
    rotate(angle) {
        console.log('Rotating the shape by', angle, 'degrees');
    }
}