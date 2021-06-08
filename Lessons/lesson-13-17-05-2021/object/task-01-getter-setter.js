const obj = {
  _name: [],
  get name() {
    return obj._name;
  },
  set name(str) {
    str.split(", ").map((item) => obj._name.push([item, item.length]));
  },
};

obj.name = "Vrezh, Artavazd";

console.log(obj.name);
