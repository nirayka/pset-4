const readlineSync = require("readline-sync");
const MIN = Number.MIN_SAFE_INTEGER
const MAX = Number.MAX_SAFE_INTEGER
let lowerBound;
let upperBound;
let lastEven;
let firstEven;

console.log("")

do {
  lowerBound = Number(readlineSync.question("Lower bound: "));
  upperBound = Number(readlineSync.question("Upper bound: "));
} while ((upperBound < MIN) || (lowerBound > upperBound) || (lowerBound < MIN) || (lowerBound > MAX) || (upperBound > MAX) || (!(Number.isInteger(upperBound)))
|| (!(Number.isInteger(lowerBound))) || (Number.isNaN(lowerBound)) || (Number.isNaN(upperBound)))


if (upperBound % 2 === 0) {
  lastEven = upperBound
} else {
  lastEven = upperBound - 1
}

if (lowerBound % 2 === 0) {
  firstEven = lowerBound
} else {
  firstEven = lowerBound + 1
}

let average = [(firstEven + lastEven) / 2]
let someNumber = (((lastEven - firstEven) / 2) + 1)
let final = someNumber * average
let finalDisplay = final.toLocaleString('en')

console.log("\n" + finalDisplay + ".\n")
