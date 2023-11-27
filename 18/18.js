"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
function calculatedGrade(writtenTest, labExams, assignments) {
    var weightedAverage = (writtenTest * 0.7) + (labExams * 0.2) + (assignments * 0.1);
    return weightedAverage;
}
function main() {
    console.log("Enter the marks scored by the student:");
    var writtenTest = parseFloat(readlineSync.question("Written test = "));
    var labExams = parseFloat(readlineSync.question("Lab exams = "));
    var assignments = parseFloat(readlineSync.question("Assignments = "));
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
    var overallGrade = calculatedGrade(writtenTest, labExams, assignments);
    // Display the result
    console.log("Grade of the student is ".concat(overallGrade.toFixed(1)));
}
// Call the main function
main();
