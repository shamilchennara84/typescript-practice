import * as readlineSync from "readline-sync";

function countEven(arr: number[]): number {
  let count = 0;
  for (let i of arr) {
    if (i % 2 === 0) {
      count++;
    }
  }
  return count;
}

function readArray(size: number): number[] {
  const data = readlineSync.question(
    "enter the value Array(comma separated) :"
  );
  return data.split(",").map((num) => parseInt(num.trim(), 10));
}

const size = parseInt(readlineSync.question("enter the size of the array"), 10);

const arr1 = readArray(size);

console.log(`Number of even number in the given array is ${countEven(arr1)}`);
