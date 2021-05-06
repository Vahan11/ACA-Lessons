const values = [null, true, {}, { name: "Elon" }, "", NaN, 0];

function filterFalsyValues(arr) {
  let truthyValues = [];

  for (let item of arr) {
    if (item) {
      truthyValues.push(item);
    }
  }

  return truthyValues;
}

console.log(filterFalsyValues(values));
console.log(filterFalsyValues(["hello", 1233, []]));
