"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.addition = function (num1, num2) {
        return num1 + num2;
    };
    Calculator.prototype.subtraction = function (num1, num2) {
        return num1 - num2;
    };
    Calculator.prototype.multiplication = function (num1, num2) {
        return num1 * num2;
    };
    Calculator.prototype.division = function (num1, num2) {
        if (num2 !== 0) {
            return num1 / num2;
        }
        else {
            console.log('Error: cannot divide by zero');
            return NaN;
        }
    };
    return Calculator;
}());
function main() {
    var calculator = new Calculator();
    while (true) {
        console.log('\nMenu:');
        console.log('1. Addition');
        console.log('2. Subtration');
        console.log('3. Multiplication');
        console.log('4. Division');
        console.log('5. Exit');
        var choice = parseInt(readlineSync.question('Enter the choice: '), 10);
        if (choice === 5) {
            console.log("exiting the program");
            break;
        }
        var number1 = parseFloat(readlineSync.question('Enter the first number'));
        var number2 = parseFloat(readlineSync.question('Enter the second number'));
        switch (choice) {
            case 1:
                console.log("Result: ".concat(calculator.addition(number1, number2)));
                break;
            case 2:
                console.log("Result: ".concat(calculator.subtraction(number1, number2)));
                break;
            case 3:
                console.log("Result: ".concat(calculator.multiplication(number1, number2)));
                break;
            case 4:
                console.log("Result: ".concat(calculator.division(number1, number2)));
                break;
            default:
                console.log('invalid choice, Please enter a valid option');
        }
    }
}
main();
