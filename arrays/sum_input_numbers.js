let numbersArray = [];

function sumInput() {
  let number = prompt("Enter a number");

  if (!number || number === null || isNaN(number)) {
    if (numbersArray.length != 0) {
      let sum = 0;

      for (let key in numbersArray) {
        sum += +numbersArray[key];
      }
      return sum;
    }
    return;
  } else {
    numbersArray.push(number);
    return sumInput();
  }
}

console.log(sumInput());
