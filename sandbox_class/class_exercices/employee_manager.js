class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  annualIncome() {
    return this.salary * 12;
  }
}

class Manager extends Employee {
  constructor(name,salary, department) {
    super(name, salary);
    this.department = department;
  }

  annualIncome() {
    return super.annualIncome() + 500;
  }
}

const employee1 = new Employee("Nigga", 200);
const manager1 = new Manager("Monkey", 200, "Farm");

console.log(employee1.annualIncome());
console.log(manager1.annualIncome());