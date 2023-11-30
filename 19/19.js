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
    const annualIncome = parseFloat(readlineSync.prompt());
    const incomeTax = calculateIncomeTax(annualIncome);
    console.log(`Income tax amount = ${incomeTax.toFixed(2)}`);
}
main();
