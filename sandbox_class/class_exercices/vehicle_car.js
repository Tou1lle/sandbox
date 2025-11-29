class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getDetails() {
    return `Make: ${this.make}\nModel: ${this.model}\nYear: ${this.year}`;
  }
}

class Car extends Vehicle {
  constructor(make, model, year, doors) {
    super(make, model, year);
    this.doors = doors;
  }

  getDetails() {
    return super.getDetails() + `\nNumber of doors: ${this.doors}`;
  }
}

const vehicle = new Vehicle("Kawasaki", "Ninja 400", 2019);
const hondaCar = new Car("Honda", "Civic", 2000, 5);

console.log(vehicle.getDetails());
console.log(hondaCar.getDetails());