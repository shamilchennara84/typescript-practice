function myFilter(myArray, callback) {
    var sum = myArray.reduce(function (acc, val) { return acc + val; }, 0);
    if (callback(sum)) {
        return sum;
    }
    else {
        return 0;
    }
}
var inputArray = [1, 2, 3, 4, 6];
var isSumEven = function (sum) { return sum % 2 === 0; };
var result = myFilter(inputArray, isSumEven);
console.log(result);
