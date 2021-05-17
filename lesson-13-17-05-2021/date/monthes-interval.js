let january2017 = new Date(2017, 0, 1);
let february2017 = new Date(2017, 1, 1);
let march2017 = new Date(2017, 2, 1);

let december2017 = new Date(2017, 11, 1);
let january2018 = new Date(2018, 0, 1);

function monthInterval(month1, month2) {
  let intervalMonthes = [];
  let monthes = [
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

  let diff = Math.round((month1 - month2) / (1000 * 3600 * 24 * 30)); // Difference in months
  let negative = Math.sign(diff) === -1 ? true : false;
  let month = negative ? month1 : month2;
  diff = negative ? -diff : diff;
  let monthName = month.toLocaleString("default", { month: "long" });
  let index = monthes.indexOf(monthName); // Index of first element/month

  if (diff > 11) {
    // No need to iterate more than monthes
    diff = 11;
  }

  for (let i = 0; i <= diff; i++) {
    if (index > 11) {
      // Means the year is over
      index = 0; // must continue from the first month
      intervalMonthes.push(monthes[index]);
      index++;
    } else {
      intervalMonthes.push(monthes[index]);
      index++;
    }
  }
  return intervalMonthes;
}

console.log(monthInterval(january2017, january2018));
