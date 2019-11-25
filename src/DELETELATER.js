const readlineSync = require("readline-sync");
let lastDigit

enteredNumber = Number(readlineSync.question("\nPositive integer: "));

lastDigit = enteredNumber % 10



let finalDisplay = lastDigit

console.log("\n" + finalDisplay + ".\n")







for (k = 0; k <= enteredHeight; k++) {
  rightPyramid = rightPyramid + "#";
}
for (m = height - 2; m < (height); m++) {
  rightPyramid = rightPyramid + " ";
}










while (number > 10) {
  lastDigit = number % 10
  reverseNumber = (reverse * 10) + lastDigit
  number = number/10
}




let digits = [];
while (separatedNumber > 0) {
    digits.push(num % 10);
    separatedNumber = parseInt(num / 10);
}
digits.reverse();
console.log(digits);



let finalDisplay = ([...revNumber(number)+''].map(n=>+n))


reverseNumber = 0;
while (number > 0) {
  reverseNumber = (reverseNumber * 10) + (number % 10);
  number = Math.floor(number / 10);
}
return reverseNumber;
}






function isPrime(number) {
    for(let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return value > 1;
}
