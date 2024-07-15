// AI-generated code smell for Speculative-Generality.
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log('Generic animal sound');
  }

  eat() {
    console.log('The animal is eating.');
  }

  swim() {
    console.log('The animal is swimming.');
  }

  fly() {
    console.log('The animal is flying');
  }
}

let dog = new Animal("Dog");
dog.makeSound();
dog.eat();
dog.swim();
dog.fly(); // Dogs cannot fly.