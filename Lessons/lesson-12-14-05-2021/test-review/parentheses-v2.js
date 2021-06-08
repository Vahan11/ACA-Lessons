let str = "((()))";

function ballanceStr(str) {
  let splited = str.split("()");
  let parent = "";

  let compare = (splited) => {
    if (splited[0].length > splited[1].length) {
      return "Left bigger";
    }

    if (splited[1].length > splited[0].length) {
      return "Right bigger";
    }
  };

  let comparisonResult = compare(splited);

  switch (comparisonResult) {
    case "Left bigger":
      for (let i = 0; i < splited[1].length - splited[0].length; i++) {
        parent += "(";
      }

      return "Left part must be filled by " + parent.length;

    case "Right bigger":
      for (let i = 0; i < splited[1].length - splited[0].length; i++) {
        parent += "(";
      }

      return "Left part must be filled by " + parent.length;

    default:
      return "String are ballanced.";
  }
}

console.log(ballanceStr(str)); // String are ballanced.
