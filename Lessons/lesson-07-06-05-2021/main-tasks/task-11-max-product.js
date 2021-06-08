let arr = [1, 2, 3, 10, 4, 5];
let maxProduct = 1;

for (i = 0; i < arr.length; i++) {
  if (arr[i + 1] === undefined) {
    break;
  } else {
    if (arr[i] * arr[i + 1] > maxProduct) {
      maxProduct = arr[i] * arr[i + 1];
    }
  }
}

console.log(maxProduct);
