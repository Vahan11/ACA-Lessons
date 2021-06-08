const Airplane = {
  set name(value) {
    this._name = value;
  },
  get name() {
    return this._name;
  },
  takeOff() {
    this._isFlying = true;
  },
  land() {
    this._isFlying = false;
  },
  get isFlying() {
    return this._isFlying;
  },
};

Airplane.takeOff();
console.log(Airplane.isFlying); // true
Airplane.land();
console.log(Airplane.isFlying); // false
