let num = 3670054;
let lastDigit = num % 10;
let numLength = num.toString().length;
let result;

if (lastDigit === 0) {
  result = num;
} else {
  result = lastDigit * 10 ** (numLength - 1) + Math.floor(num / 10);
}

console.log(result);
