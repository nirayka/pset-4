const readlineSync = require("readline-sync");
let lastDigit

enteredNumber = Number(readlineSync.question("\nPositive integer: "));

lastDigit = enteredNumber % 10



let finalDisplay = lastDigit

console.log("\n" + finalDisplay + ".\n")
