import * as readlineSync from "readline-sync";

function addArrays(arr1: number[][], arr2: number[][]): number[][] {
  const result: number[][] = [];

  for (let i = 0; i < arr1.length; i++) {
    result[i] = [];
    for (let j = 0; j < arr1[i].length; j++) {
      result[i][j] = arr1[i][j] + arr2[i][j];
    }
  }

  return result;
}



function readArray(size: number): number[][] {
  const arr: number[][] = [];
  console.log(`Enter the values of array (size ${size}x${size}):`);

  for (let i = 0; i < size; i++) {
    const row = readlineSync.question(
      `Input for row ${i + 1} (space-separated values): `).split(' ').map(num=>parseInt(num,10))

      arr.push(row)
  }
  return arr
}

const size = parseInt(readlineSync.question("enter the size of array: "),10)

const arr1 = readArray(size)
const arr2 = readArray(size)

const result = addArrays(arr1,arr2)

console.log("Sum of 2 arrays is:");
resultArray.forEach((row) => console.log(row.join(" ")));