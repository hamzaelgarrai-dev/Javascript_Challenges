var prompt = require('prompt-sync')();

let num = Number(prompt("Enter your number : "));

let total = 0;

for(let i = 1 ; i <= num ; i++){

    total= total + i;

}

console.log(total);


