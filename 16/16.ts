import * as readlineSync from "readline-sync";

function isPrime(number: number): boolean {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}


function main(): void {

  const userInput = readlineSync.question("Enter a number: ");
  const number = parseInt(userInput, 10);

  if (isPrime(number)) {
    console.log(`Entered number ${number} is a Prime number.`);
  } else {
    console.log(`Entered number ${number} is not a Prime number.`);
  }
}


main();
