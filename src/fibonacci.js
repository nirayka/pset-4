const readlineSync = require("readline-sync");
let MIN = 1
let MAX = 78
let number = Number(readlineSync.question("\nPositive integer: "));
let rootFive = Math.sqrt(5)
let phi = (1 + rootFive) / 2

while ((number < MIN) || (number > MAX) || (!(Number.isInteger(number))) || (Number.isNaN(number))) {
  number = Number(readlineSync.question("\nPositive integer: "));
}

let otherNumber = (phi ** number) - [(-phi) ** -number]
let finalNumber = otherNumber / rootFive
let roundedFinal = Math.round(finalNumber)
let finalDisplay = roundedFinal.toLocaleString('en')

console.log("\n" + finalDisplay + ".\n")
