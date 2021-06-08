let arr = [1, 2, 3, 4];
let sum = 0;

for (let item of arr) {
  if (item % 2 === 0) {
    sum += item * item;
  }
}

console.log(sum);
