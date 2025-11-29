class BankAccount {
  constructor(number, balance) {
    this.number = number;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount > this.balance) return;
    this.balance -= amount;
  }
}

const myAccount = new BankAccount(4407, 20);

console.log(myAccount.balance);
myAccount.deposit(40);
console.log(myAccount.balance);
myAccount.withdraw(60);
console.log(myAccount.balance);