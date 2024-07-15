// AI-generated code smell for Feature-Envy
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

This is an example of feature envy because the `showAirplaneDetails` method in the `Airline` class is more interested in data from the `Airplane` class than its own data. Instead of using its own properties, it's using a method from the `Airplane` class. A possible solution would be moving the `showAirplaneDetails` method to the Airplane class, where it actually should be.