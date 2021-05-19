let str = "12/13/2020";

function dayOfYear(str) {
  let isLeapYear = (year) => {
    if (year % 400 === 0) {
      return true;
    }

    if (year % 100 === 0) {
      return false;
    }

    return year % 4 === 0;
  };

  let date = new Date(str);
  let year = date.getFullYear();
  let end = new Date(year, 11, 31);
  let diff = (end - date) / (1000 * 3600 * 24);

  if (isLeapYear(year)) {
    return 366 - diff;
  } else {
    return 365 - diff;
  }
}

console.log(dayOfYear(str));
