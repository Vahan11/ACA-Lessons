let numbers = [-23, -456, 0];

for (let i = 0; i < numbers.length; i++) {
  for (let j = i; j < numbers.length; j++) {
    if (numbers[i] > numbers[j]) {
      let tempNum = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = tempNum;
    }
  }
}

console.log(numbers);
