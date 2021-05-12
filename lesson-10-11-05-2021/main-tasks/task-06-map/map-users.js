const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
  },
];

// user names
function getUserNames(users) {
  return users.map((item) => item.username);
}

console.log(getUserNames(users));

// user names length
function getUserNamesLength(users) {
  return users.map((item) => item.username.length);
}

console.log(getUserNamesLength(users));
