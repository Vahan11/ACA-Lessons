function isPositive(a) {
  let negative = Math.sign(a) === -1 ? true : false;
  let zero = a === 0 ? true : false;

  if (negative) {
    try {
      throw new Error("Negative Error");
    } catch (e) {
      console.log(e.message);
    }
  } else if (zero) {
    try {
      throw new Error("Zero Error");
    } catch (e) {
      console.log(e.message);
    }
  } else {
    console.log("YES");
  }
}

isPositive(-8);
