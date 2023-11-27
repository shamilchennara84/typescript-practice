"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
function multiplyAdjacentValues(inputArray) {
    var resultArray = [];
    for (var i = 0; i < inputArray.length - 1; i++) {
        resultArray.push(inputArray[i] * inputArray[i + 1]);
    }
    return resultArray;
}
var arrayLimit = parseInt(readlineSync.question("Enter the array limit:"));
var inputArray = [];
console.log("Enter the values of the array:");
for (var i = 0; i < arrayLimit; i++) {
    inputArray.push(parseInt(readlineSync.question("Value ".concat(i + 1, ":"))));
}
var resultArray = multiplyAdjacentValues(inputArray);
console.log("Output:");
console.log(resultArray.join("\t"));
