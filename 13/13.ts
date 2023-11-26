import * as readlineSync from "readline-sync";

function pallindrom(data:string):string  {
  return data.split('').reverse().join('')
 
}

const string = readlineSync.question('enter the string : ')

string === pallindrom(string)?console.log(`Entered string is a pallindrome`):console.log("Entered string is not a pallindrome");
