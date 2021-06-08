"" + 1 + 0; // result: 10  -  When working with a string and a number,
// the + operator works like a concatenation operator,
//so it converts the number to a string and performs the concatenation operation.

"" - 1 + 0; // result: -1 - In this case, js is trying to perform a mathematical operation,
// so it converts the string to a number. An empty string has a falsy value,
// so when converted, its numeric value is 0. 0 - 1 + 0 = -1.

true + false; // result: 1 - This is where boolean types are converted to their
// numeric values in order to perform a mathematical operation.

6 / "3"; // result: 2 - Again, division converts the string to a number.

"2" * "3"; // result: 6 - Multiplication converts a string to a number.

4 + 5 + "px"; // result: 9px - The order of actions from left to right.
// First 4 + 5 (mathematical operation) = 9. Then + works like the concatenation operator.

"$" + 4 + 5; // result: $45 - Here, + first works with the string ("$" + 4 = $4),
// then also ("$4" + 5 = $45).

"4" - 2; // result: 2 - Subtraction converts the string to a number.

"4px" - 2; // result: NaN - JS was unable to convert the string "4px" to a number,
// therefore it could not perform a subtraction operation with a non-number.

7 / 0; // result: Infinity - В джс на ноль делить можно. Результат такой операции
// является бесконечностью.

" -9 " + 5; // result:  -9 5 - string + number = string (+ is concatenating).

" -9 " - 5; // result: -14 - String " -9 " converts to number -9.

null + 1; // result: 1 - null converts to a 0, so 0 + 1 = 1.

undefined + 1; // result: NaN - undefined cannot convert to a numeric value,
// so the matematical operation with non-numeric value returnes NaN.
