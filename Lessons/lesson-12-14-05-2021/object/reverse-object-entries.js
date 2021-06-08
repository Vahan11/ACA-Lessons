let arr = [
  ["a", 1],
  ["b", 2],
];

function fromPairs(arr) {
  return arr.reduce((acc, current) => {
    acc[current[0]] = current[1];
    return acc;
  }, {});
}

console.log(fromPairs(arr));
