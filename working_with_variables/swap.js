let a = 10;
let b = 3;

let c = a;
a = b;
b = c;

console.log(a); // 3
console.log(b); // 10