const readlineSync = require("readline-sync");
let lastDigit

enteredNumber = Number(readlineSync.question("\nPositive integer: "));

lastDigit = enteredNumber % 10



let finalDisplay = lastDigit

console.log("\n" + finalDisplay + ".\n")





while (number > 10) {
  lastDigit = number % 10
  reverseNumber = (reverse * 10) + lastDigit
  number = number/10
}




let digits = [];
while (separatedNumber > 0) {
    digits.push(num % 10);
    separatedNumber = parseInt(num / 10);
}
digits.reverse();
console.log(digits);
