const readlineSync = require("readline-sync");
let enteredHeight;
const MAX = Mumber.MAX_SAFE_INTEGER
const MIN = 1
console.log("")

do {
    theNumber = Number(readlineSync.question("Positive Integer: "));
} while (theNumber > MAX || theNumber < MIN || enteredHeight % 1 !== 0 || Number.isNaN(enteredHeight))
