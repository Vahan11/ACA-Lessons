let str =
  "Which would be worse - to live as a monster, orto die as a good man? ronstem";

// There is no mentioning about "?", "!" or "." at the end so ... ))

function findLongestWord(str) {
  let wordsArr = str.split(" ").join().split("-").join().split(",");
  let longestWord = wordsArr[0];
  let longestWordsArr = [];

  for (let word of wordsArr) {
    if (word.length >= longestWord.length) {
      longestWord = word;
      longestWordsArr.push(word);
    }
  }

  return longestWordsArr.slice(longestWordsArr.length - 1).toString();
}

console.log(findLongestWord(str));
