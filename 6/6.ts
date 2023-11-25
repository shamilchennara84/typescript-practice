import * as readlineSync from "readline-sync";

function getDayName(dayNumber: number): string {
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

const userInput = readlineSync.question("enter a number between 1-7 : ")

const dayNumber = parseInt(userInput);

const dayName = getDayName(dayNumber)

console.log(`output: ${dayName}`);