const readlineSync = require("readline-sync");
let min = 0
const MAX = Number.MAX_SAFE_INTEGER
let number;
let finalDisplay;

console.log("")

do {
  number = Number(readlineSync.question("Non-negative integer: "));
} while ((number < min) || (number > MAX) || (!(Number.isInteger(number))) || (Number.isNaN(number)))

if ((!(number % 2 === 0)) && (!(number % 3 === 0)) && (!(number % 7 === 0)) && (!(number % 11 === 0))) {
  finalDisplay = "Prime."
} else {
  finalDisplay = "Not prime."
}


console.log("\n" + finalDisplay + "\n")
