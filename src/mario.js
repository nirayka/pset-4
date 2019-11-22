const readlineSync = require("readline-sync");
let height = Number(readlineSync.question("Height: "));
let row;
let i;
let p;

function printPyramid (height) {
    for (i = 1; i <= (height - i); i++) {
      row += " ";
    }
    for (p = 1; p <= i; p++) {
      row += "#";
    }
    console.log(row);
}

printPyramid(height);
