function sort(arr, sort) {
  if (!sort || sort === "Asc") {
    return arr.sort();
  }

  if (sort === "Desc") {
    return arr.sort((a, b) => b - a);
  }
}

console.log(sort([1, 5, 8, 9], "Desc"));
