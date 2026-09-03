var prompt = require('prompt-sync')();

let num = Number(prompt("Enter number : "));

const verificationParite = (x) =>{

    if(x%2 === 0){

        return true



    }
    else return false



}

let res = verificationParite(num);

console.log(res);