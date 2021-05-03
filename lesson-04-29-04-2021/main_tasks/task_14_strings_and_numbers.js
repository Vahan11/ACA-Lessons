let mixedArrayy = [
  1,
  0.69,
  "Avo",
  null,
  "Hakob",
  undefined,
  778,
  false,
  0,
  "Just a string",
  "",
];

let numbersArrayy = [];
let stringsArray = [];

for (let item of mixedArrayy) {
  if (typeof item === "number") {
    numbersArrayy.push(item);
  } else if (typeof item === "string") {
    stringsArray.push(item);
  }
}

console.log(
  `"Numbers: ${numbersArrayy.length}, Strings: ${stringsArray.length}"`
);
