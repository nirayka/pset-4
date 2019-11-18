const readlineSync = require("readline-sync");
let min = 1
const MAX = Number.MAX_SAFE_INTEGER
let number = Number(readlineSync.question("\nNon-negative integer: "));
let lastDigit;
let reverseNumber;


while ((number < min) || (number > MAX) || (!(Number.isInteger(number))) || (Number.isNaN(number))) {
  number = Number(readlineSync.question("\nPositive integer: "));
}

function revNumber(number) {
  reverseNumber = 0;
  while (number > 0) {
    reverseNumber = (reverseNumber * 10) + (number % 10);
    number = Math.floor(number / 10);
  }
  return reverseNumber;
}

let finalDisplay = ([...revNumber(number)+''].map(n=>+n))

console.log("\n" + finalDisplay + ".\n")
