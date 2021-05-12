let arr = ["a", "b", "c", "d", "e", "f", "g"];

function mySlice(arr, start, end) {
  let sliced = [];

  // without params
  if (
    (!start && start !== 0 && !end && end !== 0) ||
    (start === 0 && !end && end !== 0)
  ) {
    for (let item of arr) {
      sliced.push(item);
    }
  }

  // with one parameter
  if (start && !end && end !== 0) {
    // if negative
    if (Math.sign(start) === -1) {
      start = -start;
      let counter = 0;

      for (let i = arr.length - 1; i > -1; i--) {
        counter++;
        if (counter <= start) {
          sliced.unshift(arr[i]);
        }
      }
    } else {
      // if positive
      for (let i = start; i < arr.length; i++) {
        sliced.push(arr[i]);
      }
    }
  }

  // with start and end
  if ((start && end) || (start === 0 && end)) {
    // if both are negative
    if (Math.sign(start) === -1 && Math.sign(end) === -1) {
      start = -start;
      end = -end;

      for (let i = arr.length - end - 1; i > arr.length - start - 1; i--) {
        sliced.unshift(arr[i]);
      }
    } else if (Math.sign(start) === -1) {
      // if is start is negative
      start = -start;

      for (let i = arr.length - start; i < end; i++) {
        if (i < arr.length) {
          sliced.push(arr[i]);
        }
      }
    } else if (Math.sign(end) === -1) {
      // if end is negative
      end = -end;

      for (let i = start; i < arr.length - end; i++) {
        sliced.push(arr[i]);
      }
    } else {
      // if both are positive
      for (let i = start; i < end; i++) {
        if (i < arr.length) {
          sliced.push(arr[i]);
        }
      }
    }
  }

  return sliced;
}

console.log(mySlice(arr, -4, -1));
console.log(arr.slice(-4, -1));
