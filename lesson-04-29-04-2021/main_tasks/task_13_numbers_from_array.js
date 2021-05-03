let mixedArray = [8, 0, 1, "hey", 12, 5, true, "2", null, 7, 3];
let numbersArray = [];

for (let item of mixedArray) {
  if (typeof item === "number") {
    if (item % 2 === 0) {
      numbersArray.push(item);
    } else {
      numbersArray.unshift(item);
    }
  }
}

console.log(numbersArray);
