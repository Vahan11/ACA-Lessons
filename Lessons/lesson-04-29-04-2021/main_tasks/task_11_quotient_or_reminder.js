function calculate(number) {
  if (number === 0) {
    return "Cannot calculate";
  }

  number = number.toString().split(""); // array

  let product = 1;
  let sum = 0;

  for (let item of number) {
    product *= +item;
    sum += +item;
  }

  if (product % sum === 0) {
    return "Quotient is " + product / sum;
  } else {
    return "Remainder is " + (product % sum);
  }
}

console.log(calculate(455));
