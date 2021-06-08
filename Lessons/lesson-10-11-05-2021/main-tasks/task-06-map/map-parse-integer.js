let arr = ["1", "px", "2323"];

function parseInteger(arr) {
  return arr.map((item) => (isNaN(item) ? null : item));
}

console.log(parseInteger(arr));
