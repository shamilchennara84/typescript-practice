"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
function addArrays(arr1, arr2) {
    var result = [];
    for (var i = 0; i < arr1.length; i++) {
        result[i] = [];
        for (var j = 0; j < arr1[i].length; j++) {
            result[i][j] = arr1[i][j] + arr2[i][j];
        }
    }
    return result;
}
function readArray(size) {
    var arr = [];
    console.log("Enter the values of array (size ".concat(size, "x").concat(size, "):"));
    for (var i = 0; i < size; i++) {
        var row = readlineSync.question("Input for row ".concat(i + 1, " (space-separated values): ")).split(' ').map(function (num) { return parseInt(num, 10); });
        arr.push(row);
    }
    return arr;
}
var size = parseInt(readlineSync.question("enter the size of array: "), 10);
var arr1 = readArray(size);
var arr2 = readArray(size);
console.log(arr1);
console.log(arr2);
var result = addArrays(arr1, arr2);
console.log("Sum of 2 arrays is:");
result.forEach(function (row) { return console.log(row.join(" ")); });
