// AI-generated code smell for Dead-Code
function calculateSum(a, b) {
    var sum = a + b;
    var difference = a - b; // Dead code; This line of code is never used
    return sum;
}