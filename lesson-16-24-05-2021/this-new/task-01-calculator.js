function Calculator() {
  this.add = (a, b) => a + b;
  this.subtract = (a, b) => a - b;
  this.multiply = (a, b) => a * b;
  this.divide = (a, b) => a / b;
}

const calculator = new Calculator();

console.log(calculator.add(10, 5));
