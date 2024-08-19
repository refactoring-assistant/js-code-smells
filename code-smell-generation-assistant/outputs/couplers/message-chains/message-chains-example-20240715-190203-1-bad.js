class Employee {
  constructor(name, age) {
    this.personalData = {
      name: name,
      age: age,
      info: {
        work: {
          position: 'worker',
          experience: 1
        }
      }
    };
  }
}

let emp = new Employee('John', 25);
console.log(emp.personalData.info.work.position);