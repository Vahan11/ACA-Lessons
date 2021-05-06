const print = () => console.log("Elon Musk");

function printAfter(print) {
  console.log("Hello, world!");

  print();
}

printAfter(print);
