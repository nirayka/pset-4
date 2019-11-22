const readlineSync = require("readline-sync");
let height = Number(readlineSync.question("\nHeight: "));

console.log("\n")

for (let i = 0; i < height; i++) {
  let pyramid = "";
  let leftSpaces = "";
  let counter;
  let k;
  for (k = 0; k <= (2 * i + 1); k++) {
    pyramid = pyramid + '#';
  }
  for (let j = 1; j < (height - k); j++) {
    leftSpaces = leftSpaces + " ";
  }
  console.log(leftSpaces + pyramid);
}
