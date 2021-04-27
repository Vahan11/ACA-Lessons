var array = [0, 1];

function fibbo(num1 = false, num2 = false, n) {
  if (!num1 && !num2) {
    num1 = 0;
    num2 = 1;
  }

  let num3 = num1 + num2;
  let num4 = num2 + num3;

  array.push(num3);
  array.push(num4);

  if (array.length < n) fibbo(num3, num4, n);
}

fibbo(false, false, 5);
console.log(array);
