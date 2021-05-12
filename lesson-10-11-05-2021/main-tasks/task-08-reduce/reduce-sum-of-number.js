const arr = [1, 18, 20, 30, 8];

function reduce18s(arr) {
  return arr.reduce(
    (acc, current) => (current >= 18 ? acc + current : acc + 0),
    0
  );
}

console.log(reduce18s(arr));
