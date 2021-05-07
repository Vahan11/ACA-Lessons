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

[To file](https://github.com/Vahan11/first_repo/blob/main/lesson-04-29-04-2021/literature_section_tasks/loops/task-01-last-value.js)

### Task 02: Which values does the while loop show?
> For every loop iteration, write down which value it outputs.
1. [x] **The prefix form ++i**
```javascript
let i = 0;
while (++i < 5) { 
  alert(i);
}
```
_first iteration: ++i (i = 1), 1 < 5 (true), alert(1): 1_  
_second iteration: ++i (i = 2), 2 < 5 (true), alert(2): 2_   
_third iteration: ++i (i = 3), 3 < 5 (true), alert(3): 3_   
_forth iteration: ++i (i = 4), 4 < 5 (true), alert(4): 4_   
_fifth iteration: ++i (i = 5), 5 < 5 (false), exit from the loop_

2. [x] **The postfix form i++**
```javascript
let i = 0;
while (i++ < 5) { 
  alert(i);
}
```
_1t iteration: i = 0, 0 < 5 (true), i++ (i=1), alert(1): 1_  
_2nd iteration: i = 1, 1 < 5 (true), i++ (i=2), alert(2): 2_  
_3d iteration: i = 2, 2 < 5 (true), i++ (i=3), alert(3): 3_  
_4th iteration: i = 3, 3 < 5 (true), i++ (i=4), alert(4): 4_  
_5th iteration: i = 4, 4 < 5 (true), i++ (i=5), alert(5): 5_  
_6th iteration: i = 5, 5 < 5 (false), exit from the loop_