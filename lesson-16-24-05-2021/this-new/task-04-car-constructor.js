function Car(model, milesPerGallon) {
  [this.model, this.mpg] = [model, milesPerGallon];
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function (gallons) {
  this.tank += gallons;
  return this;
};

Car.prototype.drive = function (distance) {
  let spendFuel = distance / this.mpg;

  if (this.tank - spendFuel < 0) {
    this.odometer += this.tank * this.mpg;
    this.tank = 0;
    console.log(`I ran out of fuel at ${this.odometer} miles! Fill the tank!`);
    return this;
  }

  this.tank -= distance / this.mpg;
  this.odometer += distance;
  return this;
};

let bmw = new Car("bmw", 5);

bmw.fill(3).drive(11).drive(8).drive(5).drive(89).fill(3).drive(14);

console.log(bmw);
