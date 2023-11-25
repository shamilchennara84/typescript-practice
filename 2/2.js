"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var num1 = parseFloat(readlineSync.question("enter the number1 : "));
var num2 = parseFloat(readlineSync.question("enter the number2 : "));
var sum = num1 + num2;
console.log("the sum of the given numbers are ", sum);
