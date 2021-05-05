let num1 = 19;
let num2 = 42;

function collectEvenDigitNumbersBetween(num1, num2) {
  let evenNumbers = [];

  for (let currentNum = num1 + 1; currentNum <= num2; currentNum++) {
    let hasEvenDigits = true;

    for (let digit of currentNum.toString()) {
      if (digit % 2 !== 0) {
        hasEvenDigits = false;
        break;
      }
    }

    if (hasEvenDigits) {
      evenNumbers.push(currentNum);
    }
  }

  if (evenNumbers.length === 0) {
    return "Such numbers does not exist.";
  } else {
    return evenNumbers.join();
  }
}

console.log(collectEvenDigitNumbersBetween(num1, num2));
