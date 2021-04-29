function ucFirst(string) {
  let firstLetter = string.slice(0, 1);
  let rest = string.slice(1);

  firstLetter = firstLetter.toUpperCase();

  return firstLetter + rest;
}

console.log(ucFirst("vahan"));
