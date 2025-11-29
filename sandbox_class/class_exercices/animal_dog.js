class Animal {
  constructor(species, sound) {
    this.species = species;
    this.sound = sound;
  }

  makeSound() {
    return `${this.species} makes the noise "${this.sound}"`;
  }
}

class Dog extends Animal {
  constructor(species, sound, color) {
    super(species, sound);
    this.color = color;
  }

  makeSound() {
    return super.makeSound() + ` has ${this.color} color.`;
  }
}

const dog = new Dog("Monkey", "Bark!", "Black");
console.log(dog.makeSound());