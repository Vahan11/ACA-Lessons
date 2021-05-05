let numsArr = [1, 1, 2, -3, 0, 8, 4, 0];
let n = 9;

function collectLargerNums(numsArr, n) {
  let largerNums = [];

  for (let num of numsArr) {
    if (num > n) {
      largerNums.push(num);
    }
  }

  if (largerNums.length === 0) {
    return "Such values do not exist.";
  } else {
    return largerNums;
  }
}

console.log(collectLargerNums(numsArr, n));
