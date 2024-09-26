function calculateArea(radius) {
  return Math.PI * Math.pow(radius, 2);
}

function calculateCircumference(diameter) {
  return Math.PI * diameter;
}

function describeCircle(radius, diameter, circumference) {
  console.log(
    `Circle with radius: ${radius}, diameter: ${diameter}, and circumference: ${circumference}`
  );
}

const radius = 5;
const diameter = radius * 2;
const circumference = calculateCircumference(diameter);

console.log('Area:', calculateArea(radius));
describeCircle(radius, diameter, circumference);
