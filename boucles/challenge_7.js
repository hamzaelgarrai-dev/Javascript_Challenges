var prompt = require('prompt-sync')();

let num = Number(prompt("Enter your number :  "));

let reserve = 0 ;
let reminder;

while(num > 0 ){
    reminder = num%10 ;

    reserve = reserve *10 + reminder

    num = Math.floor(num/10)
}

console.log(reserve)