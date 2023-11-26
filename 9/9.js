"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let out;
for (let i = 1; i <= 5; i++) {
    out = "";
    for (let j = 1; j <= i; j++) {
        out += `${j}  `;
    }
    console.log(out);
}
