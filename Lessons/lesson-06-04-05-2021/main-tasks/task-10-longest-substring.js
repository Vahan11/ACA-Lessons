let str =
  "there are no two words in the english language more harmful than 'good job'.";

function findLongestSubstr(str) {
  let maxLongestSubstr = "";

  for (let i = 0; i < str.length; i++) {
    const currentActiveLetter = str[i];
    let longestSubstr = currentActiveLetter;
    let maxCountWithoutSpace = 0;
    for (let j = i + 1; j < str.length; j++) {
      const nextLetter = str[j];
      const isSpace = nextLetter === " ";
      if (isSpace) {
        longestSubstr += nextLetter;
        continue;
      } else if (longestSubstr.indexOf(nextLetter) !== -1) {
        break;
      } else {
        longestSubstr += nextLetter;
        maxCountWithoutSpace += 1;
      }
    }
    if (maxLongestSubstr.length < maxCountWithoutSpace) {
      maxLongestSubstr = longestSubstr;
    }
  }
  return maxLongestSubstr;
}

console.log(findLongestSubstr(str));
