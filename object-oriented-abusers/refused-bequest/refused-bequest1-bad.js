class Animal {
  constructor(name) {
    this.name = name;
  }

  soundMade() {
    return "~silent~";
  }

  typeOfAnimal() {
    return "Unknown";
  }

  countLegs() {
    return 0;
  }
}

class Dog extends Animal {
    soundMade() {
        return "Bark";
    }
    
    typeOfAnimal() {
        return "Mammal";
    }
    
    countLegs() {
        return 4;
    }
}

class Chair extends Animal {
    countLegs() {
        return 4;
    }
}

let dog = new Dog("goodboy");
console.log(dog.soundMade());
console.log(dog.typeOfAnimal());
console.log(dog.countLegs());

let chair = new Chair("woody");
console.log(chair.soundMade()); // does not make sense for a chair
console.log(chair.typeOfAnimal()); // does not make sense for a chair
console.log(chair.countLegs()); // the only method useful for chair

