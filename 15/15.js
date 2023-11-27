"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
function getArray(size) {
    var arr = [];
    console.log("Enter the ".concat(size, " of the array : "));
    for (var i = 0; i < size; i++) {
        var value = readlineSync.question("Enter the value ".concat(i + 1, " : "));
        arr.push(parseInt(value, 10));
    }
    return arr;
}
function displayArray(arr) {
    console.log('array values : ');
    console.log(arr.join(' '));
}
var array = getArray(5);
displayArray(array);
