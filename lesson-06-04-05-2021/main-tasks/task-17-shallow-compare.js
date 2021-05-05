let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  a: 1,
  b: 2,
};

function shallowCompare(a, b) {
  if (JSON.stringify(a) === JSON.stringify(b)) {
    return true;
  } else {
    return false;
  }
}

console.log(shallowCompare(obj1, obj2));
