let arr = [1, 2, 3];

function getHead(arr) {
  [head, ...tail] = arr;
  return [head];
}

function getTail(arr) {
  [head, ...tail] = arr;
  return tail;
}

console.log(getHead(arr));
console.log(getTail(arr));
