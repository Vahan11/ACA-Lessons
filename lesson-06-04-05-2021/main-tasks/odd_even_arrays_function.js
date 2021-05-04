let mixedArray = [45, 12, 3, 6, 17, 0];
let oddArray = [];
let evenArray = [];

function separateOddEven(arr) {
  for (let item of arr) {
    if (item % 2 === 0) {
      evenArray.push(item);
    } else {
      oddArray.push(item);
    }
  }
}

separateOddEven(mixedArray);

console.log({ oddArray, evenArray });
