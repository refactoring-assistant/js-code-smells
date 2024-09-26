class Greeting {
  constructor(message) {
    this.message = message;
  }

  showMessage() {
    return this.message;
  }
}

let greeting = new Greeting('Hello, world!');
console.log(greeting.showMessage());

let simpleMessage = 'Hello, world!';
console.log(simpleMessage);
