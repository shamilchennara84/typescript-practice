"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
function getDayName(dayNumber) {
    switch (dayNumber) {
        case 1:
            return "Sunday";
        case 2:
            return "Monday";
        case 3:
            return "Tuesday";
        case 4:
            return "Wednesday";
        case 5:
            return "Thursday";
        case 6:
            return "Friday";
        case 7:
            return "Sunday";
        default:
            return "invalid entry";
    }
}
var userInput = readlineSync.question("enter a number between 1-7 : ");
var dayNumber = parseInt(userInput);
var dayName = getDayName(dayNumber);
console.log("output: ".concat(dayName));
