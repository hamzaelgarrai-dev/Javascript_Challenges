var prompt = require('prompt-sync')();

let number1 = parseFloat(prompt("enter first number : "));
let number2 = parseFloat(prompt("enter second number : "));



if(number1 !== number2){

    let result = number1 + number2;

    console.log(result)


}else if(number1 == number2){


      let result = (number1 + number2 )*3;

      console.log(result)

}

