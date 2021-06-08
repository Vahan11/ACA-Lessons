const obj = {
  John: [100, 90, 80],
  Bob: [100, 70, 80],
};

function getBestStudent(obj) {
  return (() => {
    let name = "";
    let bestAverage = 0;

    for (let key in obj) {
      let average =
        obj[key].reduce((current, next) => (current += next)) / obj[key].length;

      if (average > bestAverage) {
        bestAverage = average;
        name = key;
      }
    }
    return name;
  })();
}

console.log(getBestStudent(obj));
