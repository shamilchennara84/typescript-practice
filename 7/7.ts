import * as readlineSync from 'readline-sync'

const userInput = parseInt(readlineSync.question("enter a number : "))

console.log(`multiplication table for ${userInput} : `)

for(let i=1 ; i<=10 ;i++){
    const result = i*userInput;

    console.log(`${userInput} * ${i} = ${result}`);

}