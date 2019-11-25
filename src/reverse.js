const readlineSync = require("readline-sync");
let number;
const MAX = Number.MAX_SAFE_INTEGER
const MIN = 1
let oddDigits = [];
console.log("")

do {
    number = Number(readlineSync.question("Positive integer: "));
} while (number > MAX || number < MIN || number % 1 !== 0 || Number.isNaN(number))

console.log("")

for (i = number; i >= 1; i = Math.floor(i / 10)) {
  let anOddDigit = i % 10
  oddDigits.push(anOddDigit);
}

let finalDisplay = oddDigits.join(", ")
console.log(finalDisplay + ".\n")
