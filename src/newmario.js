const readlineSync = require("readline-sync");
let height = Number(readlineSync.question("Height: "));

for (let i = 0; i < height; i++) {
  let pyramid;
  let leftSpaces;
  for (let j = 1; j < height - 2; j++) {
    leftSpaces = leftSpaces + ' ';
  }
  for (let k = 1; k <= (2 * i + 1); k++) {
    pyramid = pyramid + '#';
  }
  console.log(leftSpaces + pyramid + "  " + pyramid);
}
