class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

let car = new Vehicle("Toyota", "Corolla", 2020);
console.log(car.make);
console.log(car.model);
console.log(car.year);