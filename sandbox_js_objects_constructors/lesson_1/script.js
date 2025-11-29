function Book(title, author, pages, isRead) {
  if (!new.target) {
    throw Error("You must use the new keyword with this function!");
  }

  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}`;
  };
}

function Person(name) {
  this.name = name;
}

Person.prototype.saynName = function() {
  console.log(`Hello, I'm ${this.name}`);
};

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

Player.prototype.getMarker = function() {
  console.log(`My marker is '${this.marker}'`);
};

Object.setPrototypeOf(Player.prototype, Person.prototype);

const player1 = new Player("steve", "O");
const player2 = new Player("nigga", "X");

player2.saynName();

function add(a, b) {
  return a + b;
}