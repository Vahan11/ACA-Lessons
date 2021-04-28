alert(null || 2 || undefined); // 2

alert(alert(1) || 2 || alert(3)); // 1, 2

alert(1 && null && 2); // null

alert(alert(1) && alert(2)); // 1, undefined

alert(null || (2 && 3) || 4); // 3

// Check the range between
let age = 90;

if (age >= 14 && age <= 90) {
  // body
}

// Check the range outside
// 1.
if (!(age >= 14 && age <= 90)) {
  // body
}

// 2.
if (age < 14 && age > 90) {
  // body
}

// A question about "if"
if (-1 || 0) alert("first"); // first
if (-1 && 0) alert("second"); // the condition will not be met
if (null || (-1 && 1)) alert("third"); // third

// Check the login
let login = prompt("Enter the login");

if (login === "admin") {
  let password = prompt("Enter the pawwsord");

  if (password === null || !password) {
    alert("Canceled");
  }

  if (password === "TheMaster") {
    alert("Welcome!");
  } else {
    alert("Wrong password");
  }
} else if (login === null || !login) {
  alert("Canceled");
} else {
  alert("I don’t know you");
}
