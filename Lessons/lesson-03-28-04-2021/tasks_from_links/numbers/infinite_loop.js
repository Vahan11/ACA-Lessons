// This loop is infinite. It never ends. Why?
let i = 0;

while (i != 10) {
  i += 0.2;
}

// In this case, at the 50th iteration i is equal to 9.999999999999996,
// and at the 51st iteration i is 10.199999999999996.
// Thus, it will never be equal to 10, and therefore the cycle will be infinite.
