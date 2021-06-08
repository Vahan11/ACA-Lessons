let arr1 = ["a", "b", "c"];
let arr2 = [1, 2];

function zipObject(arr1, arr2) {
  return arr1.reduce((acc, current, index) => {
    acc[current] = arr2[index] !== undefined ? arr2[index] : null;
    return acc;
  }, {});
}

console.log(zipObject(arr1, arr2));
