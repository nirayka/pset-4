const readlineSync = require("readline-sync");
const MIN = Number.MIN_SAFE_INTEGER
const MAX = Number.MAX_SAFE_INTEGER

let count = 0;
let sum = 0;
let number = Number(readlineSync.question("\nNon-negative integer: "));
let average;

while ((number > 0) && (Number.isInteger(number)))  {
    count++;
    sum += number;
    average = sum / count;
    number = Number(readlineSync.question("Non-negative integer: "));
}

let roundedAverage = average.toFixed(3)
let finalDisplay = average.toLocaleString('en')

console.log("\n" + finalDisplay + ".\n");


/// how to ignore values not in the supported range??????
