function Person(name, age, favToy) {
  [this.name, this.age] = [name, age];
  this.stomach = [];

  if (favToy) {
    this.favToy = favToy;
    this.play = function () {
      return `Playing with ${this.favToy}`;
    };
  }
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

let baby = new Person("Areg", 3, "toyCar");

baby.eat("Milk");

console.log(baby.stomach); // ["Milk"]
console.log(baby.play()); // Playing with toyCar

baby.poop();

console.log(baby.stomach); // []
