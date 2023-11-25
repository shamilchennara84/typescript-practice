import * as readlineSync from 'readline-sync'

const principleAmount = parseFloat(readlineSync.question("enter the principle amount"))

const interestRate = parseFloat(readlineSync.question("enter the interest rate"))

const numberOfYear = parseFloat(readlineSync.question("enter the number of the years"))

const simpleInterest = (principleAmount * interestRate * numberOfYear) / 100

console.log(`simple interest: ${simpleInterest}`);