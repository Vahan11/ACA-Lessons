let word = "product";
let duplicate = false;

word = word.split("");

for (let i = 0; i < word.length; i++) {
  for (let j = i + 1; j < word.length; j++) {
    if (word[j] === word[i]) {
      duplicate = true;
      break;
    }
  }
}

if (duplicate) {
  console.log("Word is not isogram");
} else {
  console.log("Word is isogram");
}
