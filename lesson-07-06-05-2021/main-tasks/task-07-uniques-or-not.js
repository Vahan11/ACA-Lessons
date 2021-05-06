let arr = [1, 2, [], 3, "Vahan", {}, null, []];
let duplicate = false;

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (JSON.stringify(arr[j]) === JSON.stringify(arr[i])) {
      duplicate = true;
      break;
    }
  }
}

if (duplicate) {
  console.log("There is a duplicate value");
} else {
  console.log("Array consists only from uniques");
}
