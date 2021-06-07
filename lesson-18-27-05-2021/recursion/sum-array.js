function sumArr(arr, index = 0, sum = 0) {
  if (!arr[index]) {
    return sum;
  }
  sum += arr[index];

  return sumArr(arr, index + 1, sum);
}

console.log(sumArr([5, 6, 7])); // 18
