# Object

> Here are the tasks about objects.

- [x] Task 01

_Write an object with getter/setter field name._

```Javascript
const obj = {
  _name: [],
  get name() {
    return obj._name;
  },
  set name(str) {
    str.split(", ").map((item) => obj._name.push([item, item.length]));
  },
};

obj.name = "Vrezh, Artavazd";

console.log(obj.name);
```
[toFile](https://github.com/Vahan11/first_repo/blob/main/lesson-13-17-05-2021/object/task-01-getter-setter.js)

- [x] Task 02

_The input is object, which keys are student's names and values are array of their scores. Find the student with the best average score._

```Javascript
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
```
[toFile](https://github.com/Vahan11/first_repo/blob/main/lesson-13-17-05-2021/object/task-02-best-student.js)