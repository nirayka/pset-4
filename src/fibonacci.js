const readlineSync = require("readline-sync");
let MIN = 1
let MAX = 78
let rootFive = Math.sqrt(5)
let phi = (1 + rootFive) / 2

console.log("")

do {
  number = Number(readlineSync.question("Positive integer: "));
} while ((number < MIN) || (number > MAX) || (!(Number.isInteger(number))) || (Number.isNaN(number)))

let otherNumber = (phi ** number) - [(-phi) ** -number]
let finalNumber = otherNumber / rootFive
let roundedFinal = Math.round(finalNumber)
let finalDisplay = roundedFinal.toLocaleString('en')

console.log("\n" + finalDisplay + ".\n")
