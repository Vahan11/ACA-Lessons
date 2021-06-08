let args = [1, 2, 3];

function sum() {
  return args.reduce((sum, current) => {
    return sum + current;
  });
}

console.log(sum(args));
