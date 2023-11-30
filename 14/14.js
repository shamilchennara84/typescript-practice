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
function addArrays(arr1, arr2) {
    const result = [];
    for (let i = 0; i < arr1.length; i++) {
        result[i] = [];
        for (let j = 0; j < arr1[i].length; j++) {
            result[i][j] = arr1[i][j] + arr2[i][j];
        }
    }
    return result;
}
function readArray(size) {
    const arr = [];
    console.log(`Enter the values of array (size ${size}x${size}):`);
    for (let i = 0; i < size; i++) {
        const row = readlineSync.question(`Input for row ${i + 1} (space-separated values): `).split(' ').map(num => parseInt(num, 10));
        arr.push(row);
    }
    return arr;
}
const size = parseInt(readlineSync.question("enter the size of array: "), 10);
const arr1 = readArray(size);
const arr2 = readArray(size);
console.log(arr1);
console.log(arr2);
const result = addArrays(arr1, arr2);
console.log("Sum of 2 arrays is:");
result.forEach((row) => console.log(row.join(" ")));
