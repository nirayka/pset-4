const readlineSync = require("readline-sync");
let enteredHeight;
const MAX = Number.MAX_SAFE_INTEGER
const MIN = 1
let theFactors = [], i;
console.log("")

do {
    number = Number(readlineSync.question("Positive Integer: "));
} while (number > MAX || number < MIN || number % 1 !== 0 || Number.isNaN(number))

console.log("")
const factorLimit = Math.floor(Math.sqrt(number))

for (i = 1; i <= factorLimit; i++) {
  if (number % i === 0) {
    theFactors.push(i);
    if (number / i !== i) {
      theFactors.push(number / i);
    }
  }
}

let finalDisplay = theFactors.join(", ")
console.log(finalDisplay + ".\n")
