let i = 0;
while (++i < 5) {
  alert(i);
}

// first iteration: i = 0, ++i(i=1), 1 < 5 (true), alert(1): 1, ++i (i=2)
// second iteration: i = 2, 2 < 5 (true), alert(2): 2, ++i (i=3)
// third iteration: i = 3, 3 < 5 (true), alert(3): 3, ++i (i=4)
// forth iteration: i = 4, 4 < 5 (true), alert(4): 4, ++i (i=5)
// fifth iteration: i = 5, 4 < 5 (false), exit from the loop

let i = 0;
while (i++ < 5) {
  alert(i);
}
// 1t iteration: i = 0, 0 < 5 (true), i++ (i=1), alert(1): 1
// 2nd iteration: i = 1, 1 < 5 (true), i++ (i=2), alert(2): 2
// 3d iteration: i = 2, 2 < 5 (true), i++ (i=3), alert(3): 3
// 4th iteration: i = 3, 3 < 5 (true), i++ (i=4), alert(4): 4
// 5th iteration: i = 4, 4 < 5 (true), i++ (i=5), alert(5): 5
// 6th iteration: i = 5, 5 < 5 (false), exit from the loop
