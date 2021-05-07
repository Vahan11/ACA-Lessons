# Loops

> Here are the tasks about while and for loops.

 ### Task 01: Last loop value
 > What is the last value alerted by this code? Why?
 - [x] __Answer:__ 1
```javascript
let i = 3;
while (i) {
  alert(i--);
}
```
_The last value will be 1, because after the third iteration i will become a 0 and check while(i) do not pass._