let numbers = [-5, -2, -8, -4];
let minusesCount = 0;

for (let num of numbers) {
  if (num === 0) {
    console.log("unsigned");
    return;
  }

  if (Math.sign(num) === -1) {
    minusesCount++;
  }
}

if (minusesCount % 2 === 0) {
  console.log("+");
} else {
  console.log("-");
}
