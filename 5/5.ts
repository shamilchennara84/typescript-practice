import * as readlineSync from 'readline-sync'

const totalMarks:number = parseFloat(readlineSync.question("enter the total marks"))

let grade:string

if(totalMarks > 90){
    grade = "A"
}
else if(totalMarks >= 80 && totalMarks<=89){
    grade = "B"
}
else if(totalMarks >= 70 && totalMarks<=79){
    grade = "C"
}
else if(totalMarks >= 60 && totalMarks<=69){
    grade = "D"
}
else if(totalMarks >= 50 && totalMarks<=59){
    grade = "E"
}
else{
    grade="Failed"
}

console.log(`Grade: ${grade}`);