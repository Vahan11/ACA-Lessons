let str =
  "Yes, London. You know: fish, chips, cup ‘o tea, bad food, worse weather";
let apperance = "o";

function removeApperanceFromString(str, apperance) {
  let splitedStr = "";
  let splitedStrArray = str.split(apperance);

  for (let item of splitedStrArray) {
    splitedStr += item;
  }
  return splitedStr;
}

console.log(removeApperanceFromString(str, apperance));
