// AI-generated code smell for Divergent-Change
class ReportGenerator {
  constructor(employees) {
    this.employees = employees;
  }

  generateNameReport() {
    return this.employees.map(employee => employee.name).join("\n");
  }

  generateSalaryReport() {
    return this.employees.map(employee => `${employee.name}: ${employee.salary}`).join("\n");
  }

  generateAgeReport() {
    return this.employees.map(employee => `${employee.name}: ${employee.age}`).join("\n");
  }
}

const employees = [
  { name: 'John Doe', salary: 5000, age: 30 },
  { name: 'Jane Doe', salary: 6000, age: 25 },
  { name: 'Jim Doe', salary: 7000, age: 35 },
];
const reportGenerator = new ReportGenerator(employees);

console.log(reportGenerator.generateNameReport());
console.log(reportGenerator.generateSalaryReport());
console.log(reportGenerator.generateAgeReport());
