
const readlineSync = require("readline-sync");
const MIN = Number.MIN_SAFE_INTEGER
const MAX = Number.MAX_SAFE_INTEGER
let lowerBound = Number(readlineSync.question("\nLower bound: "));
let upperBound = Number(readlineSync.question("Upper bound: "));
let lastEven;
let firstEven;


while ((upperBound < MIN) || (lowerBound > upperBound) || (lowerBound < MIN) || (lowerBound > MAX) || (upperBound > MAX) || (!(Number.isInteger(upperBound)))
|| (!(Number.isInteger(lowerBound))) || (Number.isNaN(lowerBound)) || (Number.isNaN(upperBound))) {
  lowerBound = Number(readlineSync.question("Lower bound: "));
  upperBound = Number(readlineSync.question("Upper bound: "));
}


if (upperBound % 2 === 0) {
  lastEven = upperBound
} else {
  lastEven = --upperBound
}

if (lowerBound % 2 === 0) {
  firstEven = lowerBound
} else {
  firstEven = ++lowerBound
}



let numberForFormula = [(firstEven + lastEven) / 2] - 1
let finalDisplay = numberForFormula * (numberForFormula + 1)

console.log("\n" + finalDisplay + ".\n")


/// DOeS NOT WORK WHEN BOUNDS ARE ODD!!!
// ALSO SAYS NAN ALL THE FRICKING TIMER :SKFSDFJK LK
