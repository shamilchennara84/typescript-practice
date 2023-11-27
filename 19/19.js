"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
function calculateIncomeTax(annualIncome) {
    if (annualIncome <= 250000) {
        return 0;
    }
    else if (annualIncome <= 500000) {
        return 0.05 * (annualIncome);
    }
    else if (annualIncome <= 1000000) {
        return 0.2 * (annualIncome);
    }
    else {
        return 0.3 * (annualIncome);
    }
}
function main() {
    console.log("Enter the annual income:");
    var annualIncome = parseFloat(readlineSync.prompt());
    var incomeTax = calculateIncomeTax(annualIncome);
    console.log("Income tax amount = ".concat(incomeTax.toFixed(2)));
}
main();
