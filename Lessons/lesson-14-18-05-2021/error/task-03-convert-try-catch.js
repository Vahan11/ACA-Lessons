// variables
let str = "1234";
let num = 1234;

// function to convert
function reverseString(s) {
  typeof s !== "string"
    ? console.log("s.split is not a function")
    : (s = s.split("").reverse().join(""));
  console.log(s);
}

// convertation
function reverseStringConvertation(s) {
  try {
    console.log(s.split("").reverse().join(""));
  } catch (e) {
    console.log(e.message);
    console.log(s);
  }
}

reverseString(str); // 4321
reverseString(num); // s.split is not a function \n 1234

reverseStringConvertation(str); // 4321
reverseStringConvertation(num); // s.split is not a function \n 1234
