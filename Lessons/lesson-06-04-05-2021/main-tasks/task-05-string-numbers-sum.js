let str = "FwrtY45KHL120mn10P";
// let str = "Wert12lop-12";

function sumNumbersFromString(str) {
  let numbersString = "";
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    if (isNaN(str[i]) && str[i] !== "-") {
      numbersString += "_";
    } else {
      numbersString += str[i];
    }
  }

  let numbersArray = numbersString.split("_");

  for (let item of numbersArray) {
    if (item) {
      sum += +item;
    }
  }

  return sum;
}

console.log(sumNumbersFromString(str));
