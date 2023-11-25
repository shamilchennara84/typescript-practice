import * as readlineSync from "readline-sync";

const num1: number = parseFloat(readlineSync.question("enter the number1 : "));
const num2: number = parseFloat(readlineSync.question("enter the number2 : "));

const sum = num1 + num2;

console.log("the sum of the given numbers are ", sum);
