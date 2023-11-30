"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = __importStar(require("readline-sync"));
class Calculator {
    addition(num1, num2) {
        return num1 + num2;
    }
    subtraction(num1, num2) {
        return num1 - num2;
    }
    multiplication(num1, num2) {
        return num1 * num2;
    }
    division(num1, num2) {
        if (num2 !== 0) {
            return num1 / num2;
        }
        else {
            console.log('Error: cannot divide by zero');
            return NaN;
        }
    }
}
function main() {
    const calculator = new Calculator();
    while (true) {
        console.log('\nMenu:');
        console.log('1. Addition');
        console.log('2. Subtration');
        console.log('3. Multiplication');
        console.log('4. Division');
        console.log('5. Exit');
        const choice = parseInt(readlineSync.question('Enter the choice: '), 10);
        if (choice === 5) {
            console.log("exiting the program");
            break;
        }
        const number1 = parseFloat(readlineSync.question('Enter the first number'));
        const number2 = parseFloat(readlineSync.question('Enter the second number'));
        switch (choice) {
            case 1:
                console.log(`Result: ${calculator.addition(number1, number2)}`);
                break;
            case 2:
                console.log(`Result: ${calculator.subtraction(number1, number2)}`);
                break;
            case 3:
                console.log(`Result: ${calculator.multiplication(number1, number2)}`);
                break;
            case 4:
                console.log(`Result: ${calculator.division(number1, number2)}`);
                break;
            default:
                console.log('invalid choice, Please enter a valid option');
        }
    }
}
main();
