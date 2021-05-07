function myParseFloat(str) {
  let result = "";
  let sign = "";
  let dot = false;

  if (isInfiniteValue(str)) {
    return Number(str);
  }

  str = str.trim();

  if (str.charAt(0) === "+") {
    str = str.slice(1);
  }

  if (str.charAt(0) === "-") {
    sign = str.charAt(0);
    str = str.slice(1);
  }

  for (let i = 0; i <= str.length; i++) {
    if (isNaN(str[i])) {
      if (str[i] === ".") {
        if (!dot) {
          dot = true;
          result += str[i];
          continue;
        }
      }

      if (result.length) {
        if (sign) {
          return Number(sign + result);
        } else {
          return Number(result);
        }
      } else {
        return NaN;
      }
    } else {
      result += str[i];
    }
  }

  return Number(result);
}

function isInfiniteValue(str) {
  if (isFinite(str) || Number(str) === Infinity || Number(str) === -Infinity) {
    return true;
  } else {
    return false;
  }
}

console.log(myParseFloat("-Infinity"));

console.log(parseFloat("-Infinity"));
