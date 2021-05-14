# Object, Test review, JSON

> Here are the tasks about objects and some tasks from big test.

## Task list

- Object
- Test 03 review

### Task from test

_Given a string that consosts of left and right parentheses ["(" and ")"]. Balance the parentheses by inserting a arentheses if necessary. Determine the minimum number of characters that must be inserted._

**Sample input**

```
STDIN    Function
_ _ _    _ _ _ _ _
()))  -> s = '()))'
```
**Sample output**
```
2
```
[X] **Solution: V1**

```Javascript
let str = "(())))";

function ballanceStr(str) {
	let splited = str.split("()");

	if (splited[0].length > splited[1].length) { // right part must be filled
		let parent1 = "";
		for (let i = 0; i < (splited[0].length - splited[1].length); i++) {
			parent1 += ")";
		}

		return "Right part must be filled by " + parent1.length;
	}

	if (splited[0].length < splited[1].length) { // left part must be filled
		let parent1 = "";
		for (let i = 0; i < (splited[1].length - splited[0].length); i++) {
			parent1 += "(";
		}

		return "Left part must be filled by " + parent1.length;
	}

	if (splited[0].length === splited[1].length) {
		return "String are ballanced.";
	}
}

console.log(ballanceStr(str)); // Left part must be filled by 2
```
[X] **Solution: V2**

```Javascript
let str = "((()))";

function ballanceStr(str) {
	let splited = str.split("()");
	let parent =  "";
	
	let compare = (splited) => {
		if (splited[0].length > splited[1].length) {
			return "Left bigger";
		}

		if (splited[1].length > splited[0].length) {
			return "Right bigger";
		}
	}

	let comparisonResult = compare(splited);
	
	switch (comparisonResult) {
		case "Left bigger":
			for (let i = 0; i < (splited[1].length - splited[0].length); i++) {
				parent += "(";
			}

			return "Left part must be filled by " + parent.length;
		case "Right bigger":
			for (let i = 0; i < (splited[1].length - splited[0].length); i++) {
				parent += "(";
			}

			return "Left part must be filled by " + parent.length;
		default:
			return "String are ballanced.";
	}
}

console.log(ballanceStr(str)); // String are ballanced.
```