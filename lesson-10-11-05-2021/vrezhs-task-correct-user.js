let user = {
  name: "Vrezh",
  age: 23,
  "email-1": "first-email@com",
  "email-2": "second-email@com",
  "email-3": "third-email@com",
  "file-1": "first-file",
  "file-2": "second-file",
  "file-3": "third-file",
};

let userArray = Object.entries(user);

function correctUser(userArray) {
  return (correctedUser = userArray.reduce(
    (acc, current) => {
      if (current[0].includes("email")) {
        acc.email.push(current[1]);
      } else if (current[0].includes("file")) {
        acc.file.push(current[1]);
      } else {
        acc[current[0]] = current[1];
      }

      return acc;
    },
    { email: [], file: [] }
  ));
}

console.log(correctUser(userArray));
