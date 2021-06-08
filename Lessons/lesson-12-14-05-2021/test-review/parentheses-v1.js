let str = "(())))";

function ballanceStr(str) {
  let splited = str.split("()");

  if (splited[0].length > splited[1].length) {
    // right part must be filled
    let parent1 = "";
    for (let i = 0; i < splited[0].length - splited[1].length; i++) {
      parent1 += ")";
    }

    return "Right part must be filled by " + parent1.length;
  }

  if (splited[0].length < splited[1].length) {
    // left part must be filled
    let parent1 = "";
    for (let i = 0; i < splited[1].length - splited[0].length; i++) {
      parent1 += "(";
    }

    return "Left part must be filled by " + parent1.length;
  }

  if (splited[0].length === splited[1].length) {
    return "String are ballanced.";
  }
}

console.log(ballanceStr(str)); // Left part must be filled by 2
