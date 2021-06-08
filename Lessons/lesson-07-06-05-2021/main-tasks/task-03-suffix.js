let add_ly = addSuffix("ly");
let add_less = addSuffix("less");

function addSuffix(suf) {
  return (word) => {
    return word + suf;
  };
}

console.log(add_ly("total"));
console.log(add_less("fear"));
