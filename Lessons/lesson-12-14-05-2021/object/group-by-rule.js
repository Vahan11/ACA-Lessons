let arr1 = [6.1, 4.2, 6.3];
let rule1 = Math.floor;

let arr2 = ["one", "two", "three"];
let rule2 = (i) => i.length;

function groupBy(array, rule) {
  // making accumulator keys based on given array and rule
  let makeAccKeys = () => {
    let uniqueArr = [];
    for (let item of array) {
      item = rule(item);
      if (!uniqueArr.includes(item)) {
        uniqueArr.push(item);
      }
    }
    uniqueArr.sort();
    return uniqueArr;
  };

  // create an accumulator based on keys
  let makeAcc = (keys) => {
    let obj = {};
    for (let item of keys) {
      obj[item] = [];
    }
    return obj;
  };

  let accKeys = makeAccKeys();
  let acc = makeAcc(accKeys);

  return array.reduce((acc, current) => {
    prop = rule(current);
    acc[prop].push(current);
    return acc;
  }, acc);
}

console.log(groupBy(arr1, rule1));
// => { '4': [4.2], '6': [6.1, 6.3] }

console.log(groupBy(arr2, rule2));
// => { '3': ['one', 'two'], '5': ['three'] }
