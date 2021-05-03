let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");

let indexOfCentralElement = Math.floor(styles.length / 2);
styles[indexOfCentralElement] = "Classics";

console.log(styles.shift());

styles.unshift("Rap", "Reggae");

console.log(styles); // [ 'Rap', 'Reggae', 'Classics', 'Rock-n-Roll' ]
