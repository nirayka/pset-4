const readlineSync = require("readline-sync");
let enteredHeight;
console.log("")

do {
    enteredHeight = Number(readlineSync.question("Height: "));
} while (enteredHeight > 24 || enteredHeight < 1 || enteredHeight % 1 !== 0 || Number.isNaN(enteredHeight))

console.log("")
let height = enteredHeight

while (height > 0) {
  let printedLevel = "";
  let k;
  let i;
  for (i = 0; i <= enteredHeight; i++) {
    printedLevel = printedLevel + "#";
  }
  for (let k = 0; k < (height); k++) {
    printedLevel = printedLevel.replace(printedLevel.charAt(i), " ");
  }
  console.log(printedLevel);
  height--;
}
