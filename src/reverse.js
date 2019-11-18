const readlineSync = require("readline-sync");
let min = 0
const MAX = Number.MAX_SAFE_INTEGER
let number = Number(readlineSync.question("\nPositive integer: "));
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



console.log("\n" + finalDisplay + ".\n")


// UNFINISHED


/// https://www.freecodecamp.org/news/the-complete-guide-to-loops-in-javascript-f5e242921d8c/

/// euler tontiem somethign?
