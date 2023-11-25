"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var userInput = readlineSync.question("Enter a character : ");
console.log("you entered: ".concat(userInput.charAt(0), " "));
