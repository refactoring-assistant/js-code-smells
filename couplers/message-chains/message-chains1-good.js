class TyreBrand {
    constructor(name) {
      this.name = name;
    }
  
    getBrandName() {
      return this.name;
    }
  }
  
  class Tyre {
    constructor(material, brand) {
      this.material = material;
      this.brand = brand;
    }
  
    getMaterial() {
      return this.material;
    }
  
    getBrand() {
      return this.brand;
    }
  }
  
  class Car {
      constructor(type, tyre) {
          this.type = type;
          this.tyre = tyre;
      }
      
      getCarType() {
          return this.type;
      }

      getTyre() {
        return this.tyre;
    }
  
      getTyreBrand() {
          return this.tyre.brand.getBrandName();
      }

      getTyreMaterial() {
        return this.tyre.material;
    }
  }
  
  class CarShop {
      constructor(brand, car) {
          this.brand = brand;
          this.car = car;
      }
  
      printCarDetails() {
          console.log(`Brand Name: ${this.brand}`);
          console.log(`Car Type: ${this.car.getCarType()}`);
          console.log(`Tyre Material: ${this.car.getTyreMaterial()}`);
          console.log(`Tyre Brand: ${this.car.getTyreBrand()}`);
          // Reduced the chains by adding a middle man.
      }
  }
  
  const tyreBrand = new TyreBrand('Michelin');
  const tyre = new Tyre('Rubber', tyreBrand);
  const car = new Car('SUV', tyre);
  const carShop = new CarShop('Toyota', car);
  carShop.printCarDetails();