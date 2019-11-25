const readlineSync = require("readline-sync");
let number;
const MAX = 9999999999999999
const MIN = 1
let finalDisplay;
console.log("")
let sumOfDoubled = 0
let doubled;
let firstSum = 0
let doubledDigitSum;
let secondSum = 0
let otherDigits;

do {
    number = String(readlineSync.question("Number: "));
} while (number > MAX || number < MIN || number % 1 !== 0 || Number.isNaN(number))

console.log("")
let cardLength = Number(number.length)

for (let i = cardLength - 1; i >= 0; i -= 2) {
  doubled = Number(number.charAt(i)) * 2
  if (doubled.length === 2) {
    doubledDigitSum = Number(doubled.charAt(0)) + Number(doubled.charAt(1))
  } else {
    doubledDigitSum = doubled
  }
  firstSum = firstSum + doubledDigitSum
}
for (let i = cardLength; i >= 0; i -= 2) {
  otherDigits = number.charAt(i)
  secondSum = secondSum + otherDigits
}

let checkSum = firstSum + secondSum
let sumLength = Number(checkSum.length)

if (checkSum.charAt(sumLength) != 0) {
  finalDisplay = "Invalid."
}
else {
  if (number.length === 13) {
    if (number.charAt(0) == 4) {
      finalDisplay = "Visa."
    }
    else {
      finalDisplay = "Invalid."
    }
  }
  else if (number.length === 15) {
    if ((number.charAt(0) == 3) && (number.charAt(1) == 4)) {
      finalDisplay = "Amex."
    } else if ((number.charAt(0) == 3) && (number.charAt(1) == 7)) {
      finalDisplay = "Amex."
    } else {
      finalDisplay = "Invalid."
    }
  }
  else if (number.length === 16) {
    if (number.charAt(0) == 4) {
      finalDisplay = "Visa."
    } else if ((number.charAt(0) == 5) && (number.charAt(1) == 1)) {
      finalDisplay = "Mastercard."
    } else if ((number.charAt(0) == 5) && (number.charAt(1) == 2)) {
      finalDisplay = "Mastercard."
    } else if ((number.charAt(0) == 5) && (number.charAt(1) == 3)) {
      finalDisplay = "Mastercard."
    } else if ((number.charAt(0) == 5) && (number.charAt(1) == 4)) {
      finalDisplay = "Mastercard."
    } else if ((number.charAt(0) == 5) && (number.charAt(1) == 5)) {
      finalDisplay = "Mastercard."
    } else {
      finalDisplay = "Invalid."
    }
  }
  else {
    finalDisplay = "Invalid."
  }
}

console.log(finalDisplay + "\n")
