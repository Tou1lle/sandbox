class Person {
  static species() {
    return "Homo sapiens";
  }

  static speciesSentence() {
    return `Humans are classified as ${this.species()}`;
  }

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.hasJob = false;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  setFirstName(firstName) {
    this.firstName = firstName;
  }

  setLastName(lastName) {
    this.lastName = lastName;
  }

  set fullName(name) {
    name = name.split(" ");
    this.setFirstName(name[0]);
    this.setLastName(name[1]);
  }
}

class Worker extends Person {
  constructor(firstName, lastName, job) {
    super(firstName, lastName);
    this.job = job;
    this.hasJob = true;
  }

  setJob(job) {
    this.job = job;
  }

  get biography() {
    return `${this.fullName()} is a ${this.job}`.toUpperCase();
  }
}