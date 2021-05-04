let numsArray = [5, 2];

function calculate(arr, sign) {
  if (sign === "+") {
    let result = sum(arr);
    return result;
  }

  if (sign === "-") {
    return diff(arr);
  }

  if (sign === "*") {
    return multiple(arr);
  }

  if (sign === "/") {
    return divide(arr);
  }
}

function sum(arr) {
  let result;
  for (let num of arr) {
    result += num;
  }
  return result;
}

function diff(arr) {
  let result;
  for (let num of arr) {
    result -= num;
  }
  return result;
}

function multiple(arr) {
  let result;
  for (let num of arr) {
    result *= num;
  }
  return result;
}

function divide(arr) {
  let result;
  for (let num of arr) {
    result /= num;
  }
  return result;
}

console.log(calculate(numsArray, "+"));
