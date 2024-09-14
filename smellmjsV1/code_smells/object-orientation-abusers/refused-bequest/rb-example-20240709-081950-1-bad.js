class Car {
  constructor() {
    this.numWheels = 4;
    this.hasAirConditioning = true;
  }

  drive() {
    console.log('Driving a car...');
  }

  park() {
    console.log('Parking a car...');
  }

  turnOnAirConditioning() {
    console.log('Turning on air conditioning...');
  }

  openTrunk() {
    console.log('Opening car trunk...');
  }
}

class Motorbike extends Car {
  constructor() {
    super();
    this.numWheels = 2;
  }

  drive() {
    console.log('Riding a motorbike...');
  }

  park() {
    console.log('Parking a motorbike...');
  }

  turnOnAirConditioning() {
    console.log("Motorbikes don't have air conditioning.");
  }

  openTrunk() {
    console.log("Motorbikes don't have trunks.");
  }
}

const car = new Car();
car.drive();
car.park();
car.turnOnAirConditioning();
car.openTrunk();

const motorbike = new Motorbike();
motorbike.drive();
motorbike.park();
motorbike.turnOnAirConditioning();
motorbike.openTrunk();
