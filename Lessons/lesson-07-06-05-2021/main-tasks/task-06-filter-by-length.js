let arr = ["kia", "tesla", "bmw", "mercedes", "ok"];

function filterByLength(arr) {
  let filteredArr = [];

  for (let item of arr) {
    if (item.length <= 3) {
      filteredArr.push(item);
    }
  }

  return filteredArr;
}

console.log(filterByLength(arr));
