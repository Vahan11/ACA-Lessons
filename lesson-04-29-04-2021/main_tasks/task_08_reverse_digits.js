let number = 8543;
let lastDigit = number % 10;
let firstDigit;
let numLen = 0;

// getting the first digit
let n = number;

while (Math.floor(n / 10) > 1) {
  n = Math.floor(n / 10);
  numLen++;
}

firstDigit = n;

// remove first digit
let reversedNum = number - firstDigit * 10 ** numLen;

// add last digit as first
reversedNum = lastDigit * 10 ** numLen + reversedNum;

// change last digit to first
reversedNum = reversedNum - lastDigit + firstDigit;

console.log(reversedNum);



// Alternative solution
let num = 8543;
let arr = [];

for (let dig of num.toString()) {
  arr.push(dig);
}

let firstDig = arr[0];
let lastDig = arr[arr.length - 1];

arr.shift();
arr.pop();

let middlePart = "";

for (let dig of arr) {
  middlePart += dig;
}

console.log(+(lastDig + middlePart + firstDig));
