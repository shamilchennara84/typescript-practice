"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
function main() {
    var userInput = readlineSync.question("Enter a number: ");
    var number = parseInt(userInput, 10);
    if (isPrime(number)) {
        console.log("Entered number ".concat(number, " is a Prime number."));
    }
    else {
        console.log("Entered number ".concat(number, " is not a Prime number."));
    }
}
main();
