import * as readlineSync from "readline-sync";

function readArray(size: number): number[] {
  const data = readlineSync.question(
    "enter the value Array(comma separated) :"
  );
  return data.split(",").map((num) => parseInt(num.trim(), 10));
}

const size = parseInt(readlineSync.question("enter the size of the array"), 10);

const arr1 = readArray(size);
const arrSorted  = arr1.sort((a,b)=>a-b)

console.log(`sorted array :  ${arrSorted} `);

