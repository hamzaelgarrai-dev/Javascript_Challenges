var prompt = require('prompt-sync')();

let num1 = Number(prompt("Enter first number : "));
let num2 = Number(prompt("Enter second number : "));

const minimum = (firstNumber , secondNumber)=>{

    let res;

    if(firstNumber == secondNumber){

       return res = "numbers are equals";

    }
    else if (firstNumber < secondNumber){

        return  firstNumber;

    }
    else{
        return secondNumber
    }

}

let result = minimum(num1 , num2);
console.log(result);