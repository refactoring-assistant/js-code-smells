// In this since Legs is the only required variable, it is factored out into a separate class.
// Both Animal and Chair can use the Legs class to represent legs for each type respectively.
class Legs {
    countLegs() {
        return 0;
    }
}

class FourLegs extends Legs {
    countLegs() {
        return 4;
    }
}

class Animal {
    constructor(name, legs) {
      this.name = name;
      this.legs = legs;
    }
  
    soundMade() {
      return "~silent~";
    }
  
    typeOfAnimal() {
      return "Unknown";
    }

    countLegs() {   
        return this.legs.countLegs();
    }
  }
  
  class Dog extends Animal {
      soundMade() {
          return "Bark";
      }
      
      typeOfAnimal() {
          return "Mammal";
      }
  }
  
  class Chair {
      constructor(name, legs) {
          this.name = name;
          this.legs = legs;
      }
      countLegs() {   
        return this.legs.countLegs();
    }
  }
  
  let dog = new Dog("goodboy", new FourLegs());
  console.log(dog.soundMade());
  console.log(dog.typeOfAnimal());
  console.log(dog.countLegs());
  
  let chair = new Chair("woody", new FourLegs());
  try {
    console.log(chair.soundMade());
    console.log(chair.typeOfAnimal());
  }
  catch(e) {
    console.log("The methods soundMade() and typeOfAnimal() are no more associated with Chair.");
  }
  console.log(chair.countLegs());
  
  