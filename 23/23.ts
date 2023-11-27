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

    displayArray(array1);
}

main();
