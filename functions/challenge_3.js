var prompt = require('prompt-sync')();

let num1 = Number(prompt("Enter first number : "));
let num2 = Number(prompt("Enter second number : "));


function maximum(firstNumber , secondNumber){

    let res;

    if(firstNumber == secondNumber){

       return res = "numbers are equals";

    }
    else if (firstNumber > secondNumber){

        return  firstNumber;

    }
    else{
        return secondNumber
    }


}


let result = maximum(num1 , num2);
console.log(result);