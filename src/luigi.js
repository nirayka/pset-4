const readlineSync = require("readline-sync");
let enteredHeight;
console.log("")

do {
    enteredHeight = Number(readlineSync.question("Height: "));
} while (enteredHeight > 24 || enteredHeight < 1 || enteredHeight % 1 !== 0 || Number.isNaN(enteredHeight))

console.log("")
let height = enteredHeight

while (height > 0) {
  let leftPyramid = "";
  let rightPyramid = "";
  let i;
  let j;
  let k;
  let m;
  for (i = 0; i <= enteredHeight; i++) {
    leftPyramid = leftPyramid + "#";
  }
  for (j = 0; j < (height); j++) {
    leftPyramid = leftPyramid.replace(leftPyramid.charAt(i), " ");
  }
  for (k = 0; k <= enteredHeight; k++) {
    rightPyramid = rightPyramid + " ";
  }
  for (m = 0; m < (enteredHeight - height + 2); m++) {
    rightPyramid = rightPyramid.replace(rightPyramid.charAt(k), "#");
  }
  console.log(leftPyramid + " " + rightPyramid);
  height--;
}
