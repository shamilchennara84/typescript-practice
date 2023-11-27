import * as readlineSync from 'readline-sync

class Calculator{

    addition(num1: number,num2:number):number{
        return num1+num2
    }
    subtraction(num1: number,num2:number):number{
        return num1-num2
    }
    multiplication(num1: number,num2:number):number{
        return num1*num2
    }
    division(num1: number,num2:number):number{
        if(num2!==0){
            return num1/num2
        }else {
            console.log('Error: cannot divide by zero');
            return NaN
        }
    }
}

function main():void{
   
    const calculator  = new Calculator();
    
    while(true){
        console.log('\nMenu:')
        console.log('1. Addition')
        console.log('2. Subtration')
        console.log('3. Multiplication')
        console.log('4. Division')
        console.log('5. Exit')
        
        const choice = parseInt(readlineSync.question('Enter the choice: '),10)
       

        if(choice===5){
            console.log("exiting the program");
            break
        }

         const number1 = parseFloat(readlineSync.question('Enter the first number'))
         const number2 = parseFloat(readlineSync.question('Enter the second number'))

         switch(choice){
            case 1: 
                console.log(`Result: ${calculator.addition(number1,number2)}`);
                break
            case 2: 
                console.log(`Result: ${calculator.subtraction(number1,number2)}`);
                break
            case 3: 
                console.log(`Result: ${calculator.multiplication(number1,number2)}`);
                break
            case 4: 
                console.log(`Result: ${calculator.division(number1,number2)}`);
                break
            default:
                console.log('invalid choice, Please enter a valid option');
         }
    }



}


main()