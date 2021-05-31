function Person(name, age) {
  [this.name, this.age] = [name, age];
  this.stomach = [];
}

Person.prototype.eat = function (food) {
  // Let numbers are not edible
  if (Number(food)) {
    return "Not edible!";
  }

  if (this.stomach.length < 10) {
    this.stomach.push(food);
  }
};

Person.prototype.poop = function () {
  this.stomach.length = 0;
};

Person.prototype.toString = function () {
  return `${this.name}, ${this.age}`;
};

let armenian = new Person("Vahan", 31);

console.log(armenian.eat("54")); // Not edible
console.log(armenian.eat("a"));
console.log(armenian.eat("b"));
console.log(armenian.stomach); // ["a", "b"]
armenian.poop();
console.log(armenian.stomach); // []
console.log(armenian.toString()); // Vahan, 31
