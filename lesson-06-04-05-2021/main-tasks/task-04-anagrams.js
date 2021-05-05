let wordsArr = ["enlists", "google", "inlets", "banana", "intels"];
let word = "listen";

function findAnagram(wordsArr, word) {
  let anagrams = [];

  word = word.split("").sort().join();

  for (let item of wordsArr) {
    if (item.split("").sort().join() === word) {
      anagrams.push(item);
    }
  }

  if (!anagrams.length) {
    return "There is no anagram";
  } else {
    return anagrams;
  }
}

console.log(findAnagram(wordsArr, word));
