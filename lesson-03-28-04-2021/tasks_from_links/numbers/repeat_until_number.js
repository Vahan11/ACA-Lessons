function readNumber() {
  let number = prompt("Enter a number");

  if (!number || number === null) {
    alert("Number is: null");
  } else if (isNaN(number)) {
    readNumber();
  } else {
    alert("Number is: " + +number);
  }
}

readNumber();
