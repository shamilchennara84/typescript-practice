import * as readlineSync from "readline-sync";

function getArray(size: number): number[] {
  const arr: number[] = [];
  console.log(`Enter the ${size} of the array : `);
  for (let i = 0; i < size; i++) {
    const value = readlineSync.question(`Enter the value ${i + 1} : `);
    arr.push(parseInt(value, 10));
  }
  return arr;
}


function displayArray(arr : number[]):void{
    console.log('array values : ');
    console.log(arr.join(' '));
}

let array = getArray(5)

displayArray(array)