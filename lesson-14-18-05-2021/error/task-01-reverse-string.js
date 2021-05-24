let str = "1234";
let num = Number(1234);

function reverseString(s) {
  try {
    console.log(s.split("").reverse().join(""));
  } catch (e) {
    console.log(e.message);
    console.log(s);
  }
}

reverseString(str);
reverseString(num);
