function Person(name, age) {
  [this.name, this.age] = [name, age];
}

Person.prototype.compareAge = function (obj) {
  let message = "";

  if (obj.age > this.age) {
    message = `${obj.name} is older than me.`;
  } else if (obj.age < this.age) {
    message = `${obj.name} is younger than me.`;
  } else {
    message = `${obj.name} as the same age as me.`;
  }

  return message;
};

const p1 = new Person("Samuel", 24);
const p2 = new Person("Diana", 30);
const p3 = new Person("Karen", 24);

console.log(p1.compareAge(p2)); // Diana is older than me.
console.log(p2.compareAge(p1)); // Samuel is younger than me.
console.log(p1.compareAge(p3)); // Karen as the same age as me.
