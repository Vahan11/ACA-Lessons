let date = "2020-05-14";
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const formatDate = (date) => {
  const newDate = new Date(date);
  const day = newDate.getDate();
  const monthName = months[newDate.getMonth()];
  const year = newDate.getFullYear();

  return `${day} ${monthName} ${year}`;
};

console.log(formatDate(date));

// solution with one-liner
console.log(
  ((date) =>
    new Date(date).getDate() +
    " " +
    months[new Date(date).getMonth()] +
    " " +
    new Date(date).getFullYear())(date)
);
