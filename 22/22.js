"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = __importStar(require("readline-sync"));
function getArray(size) {
    const array = [];
    console.log(`enter the value of array of size ${size}`);
    for (let i = 0; i < size; i++) {
        const row = [];
        for (let j = 0; j < size; j++) {
            row.push(parseInt(readlineSync.question(`Value at position (${i + 1}, ${j + 1}): `)));
        }
        array.push(row);
    }
    return array;
}
function addArray(array1, array2) {
    const resultArray = [];
    for (let i = 0; i < array1.length; i++) {
        const row = [];
        for (let j = 0; j < array1[i].length; j++) {
            row.push(array1[i][j] + array2[i][j]);
        }
        resultArray.push(row);
    }
    return resultArray;
}
function displayArray(array) {
    console.log("output : ");
    for (const row of array) {
        console.log(row.join("\t"));
    }
}
function main() {
    const size = parseInt(readlineSync.question("enter the size of the array : "));
    const array1 = getArray(size);
    const array2 = getArray(size);
    const sumArray = addArray(array1, array2);
    console.log("sum of two array is :");
    displayArray(sumArray);
}
main();
