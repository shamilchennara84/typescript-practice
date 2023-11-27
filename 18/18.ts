import * as readlineSync from 'readline-sync'

function calculatedGrade(writtenTest: number,labExams:number,assignments:number):number{
const weightedAverage= (writtenTest*0.7)+(labExams*0.2)+(assignments*0.1)
return weightedAverage
}

function main(): void {
  console.log("Enter the marks scored by the student:");
  const writtenTest = parseFloat(readlineSync.question("Written test = "));
  const labExams = parseFloat(readlineSync.question("Lab exams = "));
  const assignments = parseFloat(readlineSync.question("Assignments = "));

 
  if (
    isNaN(writtenTest) ||
    isNaN(labExams) ||
    isNaN(assignments) ||
    writtenTest < 0 ||
    writtenTest > 100 ||
    labExams < 0 ||
    labExams > 100 ||
    assignments < 0 ||
    assignments > 100
  ) {
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