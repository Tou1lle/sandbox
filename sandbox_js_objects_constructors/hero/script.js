function Hero(name, level) {
  this.name = name;
  this.level = level;
}

function Warrior(name, level, weapon) {
  Hero.call(this, name, level);

  this.weapon = weapon;
}

function Healer(name, level, spell) {
  Hero.call(this, name, level);

  this.spell = spell;
}

Hero.prototype.greet = function() {
  return `${this.name} says Hello!`;
}

Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);

Warrior.prototype.attack = function() {
  return `${this.name} attacks with the ${this.weapon}!`;
}

Healer.prototype.heal = function() {
  return `${this.name} casts ${this.spell}!`;
}

const heroWarrior = new Warrior("Bjorn", 1, "axe");
const heroHealer = new Healer("Kanin", 1, "cure");