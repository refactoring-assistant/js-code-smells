class Car {
    constructor() {
        this.numWheels = 4;
    }

    drive() {
        console.log('Driving...');
    }

    park() {
        console.log('Parking...');
    }
}

class Motorbike extends Car {
    constructor() {
        super();
        this.numWheels = 2; // Refused the bequest of numWheels from the Car class
    }

    // Does not use the drive and park methods from Car, effectively refusing the bequest
    drive() {
        console.log('Motorbike driving...');
    }

    park() {
        console.log('Motorbike parking...');
    }
}