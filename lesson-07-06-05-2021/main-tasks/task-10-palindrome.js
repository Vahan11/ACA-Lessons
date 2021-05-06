let str = "madam";
let splitedStr = str.split("");
let reversedStr = "";

reversedStrArr = splitedStr.reverse();

for (let item of reversedStrArr) {
  reversedStr += item;
}

if (str === reversedStr) {
  console.log("String is palindrome");
} else {
  console.log("String is not palindrome");
}
