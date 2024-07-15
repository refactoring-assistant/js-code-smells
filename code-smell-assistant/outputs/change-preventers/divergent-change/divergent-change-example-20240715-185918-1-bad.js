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
 

In the above code snippet, we are witnessing 'Divergent Change' code smell. The 'ReportGenerator' class is responsible for generating different kinds of reports (name, salary and age). When a new type of report needs to be added or an existing report needs to be modified, we need to change this class. This means, the 'ReportGenerator' class is subject to changes for different reasons, hence violates the Single Responsibility Principle (SRP). To fix this code smell, we can create individual classes for each report type and handle their respective generation logic, this way every class would have a single reason to change.