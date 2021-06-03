class Account {
  #id;
  constructor(id, name, balance) {
    this.#id = id;
    this._name = name;
    this._balance = balance;
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length >= 5) {
      throw new Error("Name must be longer than 5 chars.");
    } else {
      this._name = name;
    }
  }

  get balance() {
    return this._balance;
  }

  set balance(value) {
    if (Math.sign(value) === -1) {
      throw new Error("Balance must be a positive number.");
    } else if (!Number(value)) {
      throw new Error("Balance must be a number.");
    } else {
      this._balance += value;
    }
  }

  credit(amount) {
    this.balance = amount;
    return this._balance;
  }

  debit(amount) {
    if (this.balance < amount) {
      return "Amount exceeded balance.";
    } else {
      this._balance -= amount;
      return "debited";
    }
  }

  transferTo(anotherAccount, amount) {
    if (!anotherAccount.id) {
      throw new Error("Not a valid account.");
    }

    if (!Number(amount)) {
      throw new Error("Amount must be a number.");
    }

    const debitMessage = this.debit(amount);

    if (debitMessage === "debited") {
      anotherAccount.credit(amount);
      console.log(this._balance);
    } else {
      console.log(debitMessage);
    }
  }

  identifyAccounts(first, second) {
    return first.id === second.id;
  }

  toString() {
    return "This is just toString method.";
  }
}

let masterAccount = new Account(1, "Master account", 500);
let visaAccount = new Account(2, "Visa account", 1000);
let anotherAccount = visaAccount;

console.log(masterAccount.balance); // 500
console.log(visaAccount.balance); // 1000

masterAccount.transferTo(visaAccount, 300); // 200

console.log(masterAccount.balance); // 200
console.log(visaAccount.balance); // 1300

console.log(masterAccount.identifyAccounts(visaAccount, anotherAccount)); // true
console.log(masterAccount.identifyAccounts(visaAccount, masterAccount)); // false
