class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return (this.width * 2) + (this.height * 2)
  }
}

const rectangle = new Rectangle(20, 30);
console.log(rectangle.getArea());
console.log(rectangle.getPerimeter());