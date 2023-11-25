"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var mark = parseFloat(readlineSync.question("enter the mark of the user : "));
var passmark = 50;
if (mark > passmark) {
    console.log('passed');
}
else {
    console.log('failed');
}
