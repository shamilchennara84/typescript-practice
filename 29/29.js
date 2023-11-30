"use strict";
function myFilter(myArray, callback) {
    const sum = myArray.reduce((acc, val) => acc + val, 0);
    if (callback(sum)) {
        return sum;
    }
    else {
        return 0;
    }
}
const inputArray = [1, 2, 3, 4, 6];
const isSumEven = (sum) => sum % 2 === 0;
const result = myFilter(inputArray, isSumEven);
console.log(result);
