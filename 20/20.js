"use strict";
const rows = 4;
let currentNumber = 1;
for (let i = 1; i <= rows; i++) {
    let rowOutput = "";
    for (let j = 1; j <= i; j++) {
        rowOutput += `${currentNumber}\t`;
        currentNumber++;
    }
    console.log(rowOutput);
}
