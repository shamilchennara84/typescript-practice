import * as readlineSync from 'readline-sync'

const mark:number = parseFloat(readlineSync.question("enter the mark of the user : "))

const passmark = 50

if(mark>passmark){
    console.log('passed');
}
else {
    console.log('failed');
}