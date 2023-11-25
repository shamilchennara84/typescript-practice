import * as readlineSync from 'readline-sync'

const userInput : string = readlineSync.question("Enter a character : " )

console.log(`you entered: ${userInput.charAt(0)} `);