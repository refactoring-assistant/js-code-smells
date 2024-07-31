// AI-generated code smell for Data-Class
class EmployeeData {
  constructor(name, age, position) {
    this.name = name;
    this.age = age;
    this.position = position;
  }
}

function promoteEmployee(employeeData, newPosition) {
  employeeData.position = newPosition;
}

const emp = new EmployeeData('John Doe', 30, 'Software Developer');
promoteEmployee(emp, 'Technical Lead');
console.log(emp.position);