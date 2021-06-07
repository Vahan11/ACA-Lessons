# Algorithms and DS / Recursion

> Here are the tasks about recursion.

## Task list

- [Recursion](https://github.com/Vahan11/ACA-Lessons/tree/main/lesson-18-27-05-2021/recursion)

- [x] Find the factorial of a given N.

```Javascript
function factorialize(num) {
  if (num < 0) return -1;
  else if (num === 0) return 1;
  else {
    return num * factorialize(num - 1);
  }
}

console.log(factorialize(5)); // 120
```
[toFile](https://github.com/Vahan11/ACA-Lessons/blob/main/lesson-18-27-05-2021/recursion/factorial.js)

- [x] Find the sum of a given array.
_solution with recursion_
```Javascript
function sumArr(arr, index = 0, sum = 0) {
  if (!arr[index]) {
    return sum;
  }
  sum += arr[index];

  return sumArr(arr, index + 1, sum);
}

console.log(sumArr([5, 6, 7])); // 18
```
_solution with iterative recursion_
```Javascript
function sumArr(arr) {
  let sum = 0;
  let index = 0;

  function forRecursiveCall(arr) {
    if (arr[index]) {
      sum += arr[index];
      index++;
      forRecursiveCall(arr);
    }
  }

  forRecursiveCall(arr);

  return sum;
}

console.log(sumArr([5, 6, 7])); // 18
```

[toFile](https://github.com/Vahan11/ACA-Lessons/blob/main/lesson-18-27-05-2021/recursion/sum-array.js)