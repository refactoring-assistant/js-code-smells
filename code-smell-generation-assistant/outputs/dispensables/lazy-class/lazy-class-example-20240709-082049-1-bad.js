// AI-generated code smell for Lazy-Class
class Greeting{
  constructor(message){
      this.message = message;
  }
  
  showMessage(){
      return this.message;
  }
}
let greeting = new Greeting("Hello, world!");
console.log(greeting.showMessage());