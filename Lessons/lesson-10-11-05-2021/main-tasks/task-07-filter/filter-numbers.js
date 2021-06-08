// let arr = ["1", "px", "2323", null, 5, [], {a: 1, b: 2}, false];
let arr = [1, 2, "a", true, {}, undefined, 55, false, "hi", null, 166, NaN];

function filterNumbers(arr) {
  // return arr.filter((item) => typeof item !== "boolean" ? Number(item) : "");

  return arr.filter((item) => {
    if (typeof item !== "boolean") {
      return Number(item);
    }
  });
}

console.log(filterNumbers(arr));
