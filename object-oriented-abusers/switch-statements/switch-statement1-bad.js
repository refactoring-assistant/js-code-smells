// a javascript application to demonstrate bad switch case use in terms of object-orientation abuse

class Vehicle {
    type;
    maxspeed;
    minspeed;

    constructor(type) {
        this.type = type;
        this.maxspeed = 0;
        this.minspeed = 0;
    }

    // Switch cases should be used as rarely as possible. They should not be very complex.
    // During complex switch cases we can think of polymorphism. We can create a class for each case and override the method.
    setDefaultSpeed() {
        switch (this.type) {
            case "car":
                this.maxspeed = 100;
                this.minspeed = 0;
                break;
            case "truck":
                this.maxspeed = 80;
                this.minspeed = 0;
                break;
            case "bike":
                this.maxspeed = 60;
                this.minspeed = 0;
                break;
            default:
                this.maxspeed = 0;
                this.minspeed = 0;
        }
    }
}

let car = new Vehicle("car");
car.setDefaultSpeed();
console.log(car.maxspeed);
console.log(car.minspeed);
