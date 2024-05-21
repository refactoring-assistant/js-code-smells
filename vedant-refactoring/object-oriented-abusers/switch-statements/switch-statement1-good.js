class Vehicle {
    type = "";
    maxspeed;
    minspeed;

    constructor(type) {
        this.type = type;
        this.maxspeed = 0;
        this.minspeed = 0;
    }

    setDefaultSpeed() {
        throw new Error("This method should be overridden");
    }
}

// Switch cases split into separate classes which extend the vehicle class.
class Car extends Vehicle {
    setDefaultSpeed() {
        this.maxspeed = 100;
        this.minspeed = 0;
    }
}

class Truck extends Vehicle {
    setDefaultSpeed() {
        this.maxspeed = 80;
        this.minspeed = 0;
    }
}

class Bike extends Vehicle {
    setDefaultSpeed() {
        this.maxspeed = 60;
        this.minspeed = 0;
    }
}

let car = new Car();
car.setDefaultSpeed();
console.log(car.maxspeed);
console.log(car.minspeed);