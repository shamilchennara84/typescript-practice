"use strict";
const my_height = 101;
try {
    if (isNaN(Number(my_height))) {
        throw new Error("notANumberError");
    }
    const height = Number(my_height);
    if (height > 100) {
        throw new Error("hugeHeightError");
    }
    else if (height < 1) {
        throw new Error("tinyHeightError");
    }
    console.log(height);
}
catch (err) {
    console.log(err.message);
}
