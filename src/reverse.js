const readlineSync = require("readline-sync");
let min = 1
const MAX = Number.MAX_SAFE_INTEGER
let number = Number(readlineSync.question("\nPositive integer: "));
let lastDigit;
let reverse;


while ((number < min) || (number > MAX) || (!(Number.isInteger(number))) || (Number.isNaN(number))) {
  number = Number(readlineSync.question("\nPositive integer: "));
}

while (number > 10) {
  lastDigit = number % 10
  reverseNumber = (reverse * 10) + lastDigit
  number = number/10
}

let finalDisplay = reverse

console.log("\n" + finalDisplay + ".\n")
