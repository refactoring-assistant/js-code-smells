class Employee {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
  
    getName() {
        return this.name;
    }
  
    getId() {
        return this.id;
    }
}

class Manager extends Employee {
    constructor(name, id, employees) {
        super(name, id);
        this.employees = employees;
    }
    
    getEmployees() {
        return this.employees;
    }
}

class Developer extends Employee {
    constructor(name, id, manager) {
        super(name, id);
        this.manager = manager;
    }
    
    getManager() {
        return this.manager;
    }
}

class EmployeeView {
    constructor(employee) {
        this.employee = employee;
    }
    
    render() {
        console.log(`Employee Name: ${this.employee.getName()}, Employee ID: ${this.employee.getId()}`);
    }
}

class ManagerView extends EmployeeView {
    constructor(manager) {
        super(manager);
    }
    
    render() {
        super.render();
        console.log(`Managed Employees: ${this.employee.getEmployees()}`);
    }
}

class DeveloperView extends EmployeeView {
    constructor(developer) {
        super(developer);
    }
    
    render() {
        super.render();
        console.log(`Manages: ${this.employee.getManager().getName()}`);
    }
}