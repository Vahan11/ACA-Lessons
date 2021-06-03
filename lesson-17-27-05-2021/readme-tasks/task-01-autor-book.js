class Autor {
  constructor(name, email, gender) {
    this._name = name;
    this._email = email;
    this._gender = gender;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (Number(value)) {
      throw new Error("Name can't be a number!");
    } else {
      this._name = value;
    }
  }

  get email() {
    return this._emaill;
  }

  set email(value) {
    if (!value.includes("@")) {
      throw new Error("Not a valid email!");
    } else {
      this._email = value;
    }
  }

  get gender() {
    return this._gender;
  }

  toString() {
    return `${this.constructor.name}: ${this._name} (${this._gender})`;
  }
}

class Book {
  static booksArr = [];

  constructor(title, price, quantity, autor) {
    this._title = title;
    this._price = price;
    this._quantity = quantity;
    this._autor = autor;
    Book.booksArr.push(this);
  }

  get title() {
    return this._title;
  }

  set title(value) {
    if (value.length < 5) {
      throw new Error("Title must be longer than 5 characters");
    } else {
      this._title = value;
    }
  }

  get price() {
    return this._price;
  }

  set price(value) {
    if (!Number(value)) {
      throw new Error("Price must be a valid number!");
    } else {
      this._price = value;
    }
  }

  get quantity() {
    return this._quantity;
  }

  set quantity(value) {
    if (!Number(value)) {
      throw new Error("Quantity must be a number!");
    } else {
      this._quantity = value;
    }
  }

  toString() {
    return `${this._autor}, ${this._title}}`;
  }

  getProfit() {
    return this.price * this.quantity;
  }
}

let autor = new Autor("Vahan", "vahansargsyan1990@gmail.com", "male");
let book = new Book("My book", 100, 10, "Vahan");

console.log(book.getProfit()); // 1000
