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
function calculatedGrade(writtenTest, labExams, assignments) {
    const weightedAverage = (writtenTest * 0.7) + (labExams * 0.2) + (assignments * 0.1);
    return weightedAverage;
}
function main() {
    console.log("Enter the marks scored by the student:");
    const writtenTest = parseFloat(readlineSync.question("Written test = "));
    const labExams = parseFloat(readlineSync.question("Lab exams = "));
    const assignments = parseFloat(readlineSync.question("Assignments = "));
    if (isNaN(writtenTest) ||
        isNaN(labExams) ||
        isNaN(assignments) ||
        writtenTest < 0 ||
        writtenTest > 100 ||
        labExams < 0 ||
        labExams > 100 ||
        assignments < 0 ||
        assignments > 100) {
        console.log("Invalid input. Please enter valid scores between 0 and 100.");
        return;
    }
    // Calculate the overall grade
    const overallGrade = calculatedGrade(writtenTest, labExams, assignments);
    // Display the result
    console.log(`Grade of the student is ${overallGrade.toFixed(1)}`);
}
// Call the main function
main();
