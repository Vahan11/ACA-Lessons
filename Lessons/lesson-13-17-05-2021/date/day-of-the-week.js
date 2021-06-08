let str = "12/07/2016";

function getDayOfWeek(str) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let date = new Date(str);
  let day = date.getDay();

  return days[day];
}

console.log(getDayOfWeek(str));
