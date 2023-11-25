"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var principleAmount = parseFloat(readlineSync.question("enter the principle amount"));
var interestRate = parseFloat(readlineSync.question("enter the interest rate"));
var numberOfYear = parseFloat(readlineSync.question("enter the number of the years"));
var simpleInterest = (principleAmount * interestRate * numberOfYear) / 100;
console.log("simple interest: ".concat(simpleInterest));
