var prompt = require('prompt-sync')();

let n = Number(prompt("Enter the number :"));

let count = 0 ;

while(n > 0){

    n = Math.floor(n/10);
    count ++;
}

console.log(count);