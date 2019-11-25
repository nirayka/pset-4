const readlineSync = require("readline-sync");
const MIN = Number.MIN_SAFE_INTEGER
const MAX = Number.MAX_SAFE_INTEGER

let count = 0;
let sum = 0;
let number = 0;
let average;

console.log("");
while (number >= 0) {
  number = Number(readlineSync.question("Non-negative integer: "));
  if (number >= 0 && Number.isInteger(number) && number <= MAX && !Number.isNaN(number)) {
    sum = sum + number;
    count++;
  } else if (number < 0 && Number.isInteger(number) && number >= MIN) {
      number = number;
  } else {
    number = 0;
  }

}

average = sum / count;

let roundedAverage = average.toFixed(3)
let finalDisplay = average.toLocaleString('en')

console.log("\n" + finalDisplay + ".\n");
