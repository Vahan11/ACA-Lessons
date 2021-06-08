let sentence = "_, we have a _.";
let wordsArray = ["Huston", "problem"];
let replacedSentence = "";
let counter = 0;

for (let char of sentence) {
  if (char === "_") {
    replacedSentence += wordsArray[counter];
    counter++;
  } else {
    replacedSentence += char;
  }
}

console.log(replacedSentence);
