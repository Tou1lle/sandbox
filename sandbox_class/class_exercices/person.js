class Person {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }

  changeInfo() {
    return `${this.name} is ${this.age} years old and is from ${this.country}`
  }
}

const nigga = new Person("Nigga", 23, "Nigeria");
const monkey = new Person("Monkey", 20, "Vietnam");

console.log(nigga.changeInfo());
console.log(monkey.changeInfo());