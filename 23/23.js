"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
function getArray(size) {
    var array = [];
    console.log("enter the value of array of size ".concat(size));
    for (var i = 0; i < size; i++) {
        var row = [];
        for (var j = 0; j < size; j++) {
            row.push(parseInt(readlineSync.question("Value at position (".concat(i + 1, ", ").concat(j + 1, "): "))));
        }
        array.push(row);
    }
    return array;
}
function displayArray(array) {
    console.log("output : ");
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var row = array_1[_i];
        console.log(row.join("\t"));
    }
}
function main() {
    var size = parseInt(readlineSync.question("enter the size of the array : "));
    var array1 = getArray(size);
    displayArray(array1);
}
main();
