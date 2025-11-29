class Shape {
  calculateArea() {
    return "I do nothing nigga";
  }
}

class Circle extends Shape {
  #pi = 3.14;

  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return this.#pi * Math.pow(this.radius, 2);
  }
}

class Triangle extends Shape {
  constructor(sideA, sideB, sideC) {
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  calculateArea() {
    
  }
}

const circle = new Circle(5);
console.log(circle.calculateArea());