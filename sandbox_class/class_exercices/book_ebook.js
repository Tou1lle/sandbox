class Book {
  constructor(title, author, publicationYear) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
  }

  getDetails() {
    return `Author: ${this.author}\n` +
           `Title: ${this.title}\n` +
           `Publication year: ${this.publicationYear}\n`;
  }
}

class EBook extends Book {
  constructor(title, author, publicationYear, price) {
    super(title, author, publicationYear);
    this.price = price;
  }

  getDetails() {
    return super.getDetails() + `Price: ${this.price}`;
  }
}

const harryPotter = new Book("Harry Potter", "J.K. Rowlings", 1999);
const nesbo = new EBook("Snowman", "Jo Nesbo", 2010, "300$");

console.log(harryPotter.getDetails());
console.log(nesbo.getDetails());