var prompt = require('prompt-sync')();

let num = Number(prompt("Enter your number : "));

let count = 0;

for(let i = 1 ; count < num ; i++){

    if(i % 2 == 0 ){

        console.log(i);
        count++;

    }

}
