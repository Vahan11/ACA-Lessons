let arr = ["a", "b", "c"];

function myForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

myForEach(arr, (item, index, array) => {
  console.log(item);
  console.log(index);
  console.log(array);
});
