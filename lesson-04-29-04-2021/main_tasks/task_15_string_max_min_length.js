let stringsArray = ["anymore", "raven", "me", "communicate"];

for (let i = 0; i < stringsArray.length; i++) {
  for (let j = i; j < stringsArray.length; j++) {
    if (stringsArray[i].length > stringsArray[j].length) {
      let tempString = stringsArray[i];
      stringsArray[i] = stringsArray[j];
      stringsArray[j] = tempString;
    }
  }
}

let shortest = stringsArray[0];
let longest = stringsArray[stringsArray.length - 1];

console.log(shortest.length + longest.length);
