// AI-generated code smell for Alternative-Classes-With-Different-Interfacesclass Dog {
    constructor(name) {
        this.name = name;
    }

    bark() {
        return `${this.name} says Woof!`;
    }

    fetchBall() {
        return `${this.name} fetched the ball!`;
    }
}

class Cat {
    constructor(name) {
        this.name = name;
    }

    meow() {
        return `${this.name} says Meow!`;
    }

    chaseLaser() {
        return `${this.name} is chasing the laser!`;
    }
}