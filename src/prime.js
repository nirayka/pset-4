const readlineSync = require("readline-sync");
let min = 0
const MAX = Number.MAX_SAFE_INTEGER
let number = Number(readlineSync.question("\nNon-negative integer: "));
let finalDisplay;

while ((number < min) || (number > MAX) || (!(Number.isInteger(number))) || (Number.isNaN(number))) {
  number = Number(readlineSync.question("\nNon-negative integer: "));
}

if ((!(number % 2 === 0)) && (!(number % 3 === 0)) && (!(number % 7 === 0)) && (!(number % 11 === 0))) {
  finalDisplay = "Prime."
} else {
  finalDisplay = "Not prime."
}


console.log("\n" + finalDisplay + "\n")


/// finished i THINK but not sure
