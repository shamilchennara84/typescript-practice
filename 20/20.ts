const rows: number = 4; 

let currentNumber: number = 1;

for (let i: number = 1; i <= rows; i++) {
  let rowOutput: string = "";
  for (let j: number = 1; j <= i; j++) {
    rowOutput += `${currentNumber}\t`;
    currentNumber++;
  }
  console.log(rowOutput); 
}
