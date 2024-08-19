class Airplane {
    constructor(make, model, flightHours){
        this.make = make;
        this.model = model;
        this.flightHours = flightHours;
    }
    getAirplaneDetails(){
        return this.make + " " + this.model + ", " + this.flightHours;
    }
}

class Airline {
    constructor(airplane){
        this.airplane = airplane;
    }
    showAirplaneDetails(){
        return this.airplane.getAirplaneDetails();
    }
}