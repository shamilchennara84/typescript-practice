import * as readlineSync from "readline-sync";

function getArray(size: number): number[][] {
  const array: number[][] = [];
  console.log(`enter the value of array of size ${size}`);
  for (let i = 0; i < size; i++) {
    const row: number[] = [];
    for (let j = 0; j < size; j++) {
      row.push(
        parseInt(
          readlineSync.question(`Value at position (${i + 1}, ${j + 1}): `)
        )
      );
    }
    array.push(row);
  }
  return array;
}

function addArray(array1: number[][], array2: number[][]): number[][] {
  const resultArray: number[][] = [];

  for (let i = 0; i < array1.length; i++) {
    const row: number[] = [];
    for (let j = 0; j < array1[i].length; j++) {
      row.push(array1[i][j] + array2[i][j]);
    }
    resultArray.push(row);
  }
  return resultArray;
}

function displayArray(array: number[][]): void {
  console.log("output : ");
  for (const row of array) {
    console.log(row.join("\t"));
  }
}

function main(): void {
  const size: number = parseInt(
    readlineSync.question("enter the size of the array : ")
  );

  const array1: number[][] = getArray(size);
  const array2: number[][] = getArray(size);

  const sumArray: number[][] = addArray(array1, array2);

  console.log("sum of two array is :");

  displayArray(sumArray);
}

main();
