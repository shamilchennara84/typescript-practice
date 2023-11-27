import * as readlineSync from "readline-sync";

let my_string:  any = readlineSync.question("Enter a string or number: ");

try {

  my_string = my_string.split("").reverse().join("");
  console.log(`Reversed string is : ${my_string}`);
} catch (err) {
  console.log(`Error : ${err.message}`);
} finally {
  console.log(`Type of my_string is : ${typeof my_string}`);
}
