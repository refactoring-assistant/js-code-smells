//  The single file of code to be sent to openai api.
class Vehicle {
    type;
    maxspeed;
    minspeed;

    constructor(type) {
        this.type = type;
        this.maxspeed = 0;
        this.minspeed = 0;
    }

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
