import * as readlineSync from "readline-sync";

const userInput = parseInt(readlineSync.question("enter the limit"));
let result = 0;
for (let i = 1; i <= userInput; i = i + 2) {
  result += i;
}

console.log("Sum of odd number =", result);
