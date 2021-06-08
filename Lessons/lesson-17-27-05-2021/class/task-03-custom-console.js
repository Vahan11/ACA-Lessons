class Console {
  #name;
  constructor(name = "js-console") {
    this.#name = name;
    this._history = [];
  }

  get name() {
    return this.#name;
  }

  history(range) {
    return this._history.slice(-range);
  }

  log(...args) {
    if (this.#name === "js-console") {
      console.log(...args);
    }

    if (this.#name === "Regular") {
      let str = `${this.#name}: `;

      args.forEach((arg) => {
        if (Array.isArray(arg)) {
          str += "[" + arg + "], ";
        } else {
          str += arg + ", ";
        }
      });

      this._history.push(str);
      return str.slice(0, -2);
    }

    if (this.#name === "Fancy") {
      let str = `${this.#name}: ${JSON.stringify(...args)}`;
      this._history.push(str);
      return str;
    }
  }
}

let fancyConsole = new Console("Fancy");
let regularConsole = new Console("Regular");

let regularResult1 = regularConsole.log(1, 2, 3, [4, 5, 6], null);
let regularResult2 = regularConsole.log("ok : ", 1, 2, 3);
let regularResult3 = regularConsole.log(7, 8, 9, 50, 1, 4);
let fancyResult = fancyConsole.log({ a: 1, b: 2 });

console.log(regularResult1); // Regular: 1, 2, 3, [4,5,6], null
console.log(regularResult2); // Regular: ok : , 1, 2, 3
console.log(regularResult3); // Regular: 7, 8, 9, 50, 1, 4
console.log(fancyResult); // Fancy: {"a":1,"b":2}

let reghistory = regularConsole.history(1); // The last one
console.log(reghistory); // ["Regular: 7, 8, 9, 50, 1, 4, "]
