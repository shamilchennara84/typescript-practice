"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var userInput = parseInt(readlineSync.question("enter a number : "));
console.log("multiplication table for ".concat(userInput, " : "));
for (var i = 1; i <= 10; i++) {
    var result = i * userInput;
    console.log("".concat(userInput, " * ").concat(i, " = ").concat(result));
}
