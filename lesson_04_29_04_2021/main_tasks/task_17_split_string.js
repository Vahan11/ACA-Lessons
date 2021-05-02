let string = "May the Force be with you.";
let array = string.split(" ");
let lastWord = array[array.length - 1];

array.pop();
array.push(lastWord.slice(0, -1));

console.log(array);
