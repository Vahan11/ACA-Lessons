function redundant(str) {
  return () => {
    return str;
  };
}

const f1 = redundant("Vahan");
console.log(f1());
