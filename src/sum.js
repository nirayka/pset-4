
const readlineSync = require("readline-sync");
let lowerBound;
let upperBound;
let enteredLower;
let enteredUpper;

do {
  enteredLower = readlineSync.question("\nLower bound: ");
  enteredUpper = readlineSync.question("Upper bound: ");
  lowerBound = Number(enteredLower)
  upperBound = Number(enteredUpper)
} while (lowerBound >= upperBound)

finalDisplay = [((upperBound-lowerBound) + 1) / 2] * (upperBound + lowerBound)
console.log("\n"finalDisplay)



// FIX THE MATH PART!
