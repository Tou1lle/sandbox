class Bank {
  constructor(accNumber, holderName, balance) {
    this.accNumber = accNumber;
    this.holderName = holderName;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount > this.balance) return 0;
    this.balance -= amount;
    return amount;
  }

  transferTo(targetAccount, amount) {
    const amountToSend = this.withdraw(amount);
    targetAccount.deposit(amountToSend);
  }
}

const firstAcc = new Bank(1, "Nigga", 10);
const secondAcc = new Bank(2, "Monkey", 5);

console.log(`Nigga balance: ${firstAcc.balance}`);
console.log(`Monkey balance: ${secondAcc.balance}`);

firstAcc.transferTo(secondAcc, 9);

console.log(`Nigga balance: ${firstAcc.balance}`);
console.log(`Monkey balance: ${secondAcc.balance}`);