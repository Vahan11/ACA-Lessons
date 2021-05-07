function myParseInt(str) {
  let result = "";

  str = str.trim();

  if (str.charAt(0) === "+") {
    str = str.slice(1);
  }

  if (
    (str.charAt(0) === "0" && str.charAt(1) === "x") ||
    (str.charAt(0) === "0" && str.charAt(1) === "X")
  ) {
      return "This part of implementation are missing.";
    // changeBaseAndParse();
  }

  for (let i = 0; i <= str.length; i++) {
    if (isNaN(str[i])) {
      if (result.length) {
        return Number(result);
      } else {
        return NaN;
      }
    } else {
      result += str[i];
    }
  }

  return result;
}
console.log(myParseInt("015"));
