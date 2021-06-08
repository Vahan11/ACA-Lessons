let str = "aweyoolp";

function moveLetter(str) {
  let newString = "";
  let iterationsCount = 0;

  for (let i = 0; i < str.length - 2; i += 3) {
    newString += str.substring(i + 1, i + 3) + str[str.indexOf(str[i])];
    iterationsCount += i;
  }

  let remainder = str.slice(iterationsCount * 2);

  return newString + remainder;
}

console.log(moveLetter(str));
