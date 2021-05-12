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

function filterUsersLang(users) {
  return users.filter((user) => user.lang !== "ru");
}

console.log(filterUsersLang(users));
