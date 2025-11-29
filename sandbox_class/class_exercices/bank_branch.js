class Bank {
  constructor(name, ...branches) {
    this.name = name;
    this.branches = branches;
  }

  addBranch(branch) {
    this.branches.push(branch);
  }

  deleteBranch(branch) {
    const indexToRemove = this.branches.indexOf(branch);
    this.branches.splice(indexToRemove, 1);
  }
}

const bank = new Bank("name", "branch1", "branch2", "branch3");
bank.addBranch("niggaBranch");
console.log(bank);
bank.deleteBranch("branch2");
console.log(bank);