let number = prompt("Enter a phone number");

function cleanPhoneNumber(number) {
  let badNumberMessage = "It is a bad number";

  // ignoring the spaces
  if (number.includes(" ")) {
    let numWithoutSpaces = "";

    for (let part of number.split(" ")) {
      numWithoutSpaces += part;
    }

    number = numWithoutSpaces;
  }

  if (number.length < 10) {
    return badNumberMessage;
  }

  if (number.length > 11) {
    return badNumberMessage;
  }

  if (number.length === 10) {
    if (number.includes("+")) {
      return badNumberMessage;
    } else if (isNaN(number)) {
      // if number are not clean
      return badNumberMessage;
    } else {
      return number;
    }
  }

  if (number.length === 11) {
    if (number.charAt(0) === "+") {
      // if the first char is +
      let splited = number.split("+");

      if (splited.length > 2) {
        // if the other part contains +
        alert(badNumberMessage);
      } else if (isNaN(splited[1])) {
        // if the other part are not clean
        return badNumberMessage;
      } else {
        return splited[1]; // returns the clean part
      }
    } else {
      return badNumberMessage;
    }
  }
}

console.log(cleanPhoneNumber(number));
