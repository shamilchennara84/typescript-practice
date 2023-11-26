import * as readlineSync from 'readline-sync'

function swapArray(arr1: number[],arr2 : number[]):void{
    const temp = [...arr1]
    arr1.length = 0
    arr1.push(...arr2)
    arr2.length = 0
    arr2.push(...temp)
}

function readArray(size: number): number[]{
    const data= readlineSync.question("enter the value Array(comma separated) :")
    return data.split(',').map((num)=>
        parseInt(num.trim(),10)
    )
}

const size = parseInt(readlineSync.question("enter the size of the array"),10)

const arr1 = (readArray(size))

const arr2 = (readArray(size))



console.log(`Arrays before swapping:`);
console.log(`Array1: ${arr1}`);
console.log(`Array2: ${arr2}`);


swapArray(arr1, arr2);


console.log(`Arrays after swapping:`);
console.log(`Array1: ${arr1}`);
console.log(`Array2: ${arr2}`);