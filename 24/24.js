"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var Area = /** @class */ (function () {
    function Area() {
    }
    Area.prototype.circle = function (radius) {
        return Math.PI * radius * radius;
    };
    Area.prototype.square = function (side) {
        return side * side;
    };
    Area.prototype.rectangle = function (length, width) {
        return length * width;
    };
    Area.prototype.triangle = function (base, height) {
        return 0.5 * base * height;
    };
    return Area;
}());
var MyClass = /** @class */ (function (_super) {
    __extends(MyClass, _super);
    function MyClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyClass.prototype.main = function () {
        var choice = parseInt(readlineSync.question("Enter your choice:\n1. Circle\n2. Square\n3. Rectangle\n4. Triangle"));
        switch (choice) {
            case 1:
                var radius = parseFloat(readlineSync.question("enter the radius of the circle"));
                console.log("area of the circle is ".concat(this.circle(radius)));
                break;
            case 2:
                var side = parseFloat(readlineSync.question("enter the side of square"));
                console.log("area of the square is ".concat(this.square(side)));
                break;
            case 3:
                var length_1 = parseFloat(readlineSync.question("enter the length of rectangle"));
                var width = parseFloat(readlineSync.question("enter the width of the rectangle"));
                console.log("area of the rectangle is ".concat(this.rectangle(length_1, width)));
                break;
            case 4:
                var base = parseFloat(readlineSync.question("enter the base of the triangle"));
                var height = parseFloat(readlineSync.question("enter the height of the trianlge"));
                console.log("area of the traingle is ".concat(this.triangle(base, height)));
                break;
            default:
                console.log("invalid choice !");
        }
    };
    return MyClass;
}(Area));
var myObj = new MyClass();
myObj.main();
