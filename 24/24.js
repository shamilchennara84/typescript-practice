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
class Area {
    circle(radius) {
        return Math.PI * radius * radius;
    }
    square(side) {
        return side * side;
    }
    rectangle(length, width) {
        return length * width;
    }
    triangle(base, height) {
        return 0.5 * base * height;
    }
}
class MyClass extends Area {
    main() {
        const choice = parseInt(readlineSync.question("Enter your choice:\n1. Circle\n2. Square\n3. Rectangle\n4. Triangle"));
        switch (choice) {
            case 1:
                const radius = parseFloat(readlineSync.question("enter the radius of the circle"));
                console.log(`area of the circle is ${this.circle(radius)}`);
                break;
            case 2:
                const side = parseFloat(readlineSync.question("enter the side of square"));
                console.log(`area of the square is ${this.square(side)}`);
                break;
            case 3:
                const length = parseFloat(readlineSync.question("enter the length of rectangle"));
                const width = parseFloat(readlineSync.question("enter the width of the rectangle"));
                console.log(`area of the rectangle is ${this.rectangle(length, width)}`);
                break;
            case 4:
                const base = parseFloat(readlineSync.question("enter the base of the triangle"));
                const height = parseFloat(readlineSync.question("enter the height of the trianlge"));
                console.log(`area of the traingle is ${this.triangle(base, height)}`);
                break;
            default:
                console.log("invalid choice !");
        }
    }
}
const myObj = new MyClass();
myObj.main();
