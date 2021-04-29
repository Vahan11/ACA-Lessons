function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) + min + 1);
}

console.log(randomInteger(1, 3));
