import * as readlineSync from "readline-sync";

function multiplyAdjacentValues(inputArray: number[]): number[] {
  const resultArray: number[] = [];

  for (let i = 0; i < inputArray.length - 1; i++) {
    resultArray.push(inputArray[i] * inputArray[i + 1]);
  }

  return resultArray;
}

const arrayLimit: number = parseInt(
  readlineSync.question("Enter the array limit:")
);

const inputArray: number[] = [];
console.log("Enter the values of the array:");

for (let i = 0; i < arrayLimit; i++) {
  inputArray.push(parseInt(readlineSync.question(`Value ${i + 1}:`)));
}

const resultArray: number[] = multiplyAdjacentValues(inputArray);
console.log("Output:");
console.log(resultArray.join("\t"));
