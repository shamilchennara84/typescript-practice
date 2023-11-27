var rows = 4; // You can adjust the number of rows as needed
var currentNumber = 1;
for (var i = 1; i <= rows; i++) {
    var rowOutput = "";
    for (var j = 1; j <= i; j++) {
        rowOutput += "".concat(currentNumber, "\t");
        currentNumber++;
    }
    console.log(rowOutput); // Each row is printed with console.log
}
