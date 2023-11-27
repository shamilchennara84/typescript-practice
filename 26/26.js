"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var my_string = readlineSync.question("Enter a string or number: ");
try {
    my_string = my_string.split("").reverse().join("");
    console.log("Reversed string is : ".concat(my_string));
}
catch (err) {
    console.log("Error : ".concat(err.message));
}
finally {
    console.log("Type of my_string is : ".concat(typeof my_string));
}
