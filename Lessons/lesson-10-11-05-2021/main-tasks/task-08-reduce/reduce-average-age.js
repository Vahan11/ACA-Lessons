const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    age: 56,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    age: 54,
  },
  {
    username: "Fingolfin",
    lang: "elven",
    age: 40,
  },
];

function getAverageAge(users) {
  return (
    users.reduce((acc, currentUser) => acc + currentUser.age, 0) / users.length
  );
}

console.log(getAverageAge(users));
