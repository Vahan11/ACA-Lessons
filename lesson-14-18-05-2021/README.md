# Erro☈s | /R{e}.g([^ex])?/

> Here are the Tasks about JS Errors and Regular Expressions.

## Task list

- [Errors](https://github.com/Vahan11/first_repo/tree/main/lesson-14-18-05-2021/error)
- Regex

### Errors: task 04
__Teacher's Function__

- [x] **Create the function, which checks the students labs and grade them.**

__Students task: Given a number. Create the function,__  
__which returns the ... ( description of the task )).__

__Students task Requirements:__
__Submit the lab as an object: {student: yourName, runLab: yourFunc}.__

```Javascript
// Parsed data
let studentLabs = [
  {
    student: "Vahan",
    myCode: function (num) {
      return Math.pow(num, num);
    }, // Trailing commas in Object literals
  },
  {
    student: "Arsen",
    runLab: function (num) {
      return Math.pow(num, num);
    },
  },
  {
    student: "Hakob",
    runLab: function (num) {
      return num * num;
    },
  }, // Trailing commas in Array literals
];

// Description of function gradeLabs
function gradeLabs(labs) {
  // Let the teacher's result is true result. let's take it as a constant :)
  let num = 3;
  const trueResult = ((num) => Math.pow(num, num))(num); // 27

  // We have to compare each student lab result to trueResult and grade.
  for (let lab of labs) {
    try {
      // to catch if any error
      // and
      try {
        // to grade
        let labResult = lab.runLab(num);

        if (labResult === trueResult) {
          console.log(`Good job, ${lab.student}.`);
        } else {
          console.log(`Bad job, ${lab.student}.`);
        }
      } catch (error) {
        // if error in grade section

        if (error.name === "TypeError") {
          // Requirements pattern mismatch
          console.log(`${lab.student}, read the Requirements.`);
        } else {
          // other error
          throw error;
        }
      }
    } catch (error) {
      // any other error
      console.log(`${error.name} ${error.message}`);
    }
  }
}

// Call
gradeLabs(studentLabs);

// Call result

// Vahan, read the Requirements.
// Good job, Arsen.
// Bad job, Hakob.

// --------------------------------------------------  V. Sargsyan

```
### About Trailing commas

> Why is that useful? There are two benefits.

- First, rearranging items is simpler, because you don’t have to add and remove
  commas if the last item changes its position.
- Second, it helps version control systems with tracking what actually changed. 
For example, going 
```Javascript
from:
    [
        'foo'
    ]
to:
    [
        'foo',
        'bar'
    ]
```
leads to both the line with 'foo' and the line with 'bar' being marked as changed,
even though the only real change is the latter line being added.
```Javascript
// --------------------------------------------------- Dr. Axel Rauschmayer
```

### Regex tutorial
- [x] _Exercise 9: Matching Whitespaces_
```Javascript
\s
```
- [x] _Exercise 10: Starting and ending_
```Javascript
^M.*l$
```
- [x] _Lesson 11: Match groups_
```Javascript
(file.*[a-z]*)\.pdf$
```
- [x] _Lesson 12: Nested groups_
```Javascript
(\w+\s+(\d+))
```
- [x] _Lesson 13: More group work_
```Javascript
(\d+)x(\d+)
```
- [x] _Lesson 14: It's all conditional_
```Javascript
[td] or cats|dogs
```
- [x] _Lesson 15: Other special characters_
```Javascript
.*
```