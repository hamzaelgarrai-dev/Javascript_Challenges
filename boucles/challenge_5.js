var prompt = require('prompt-sync')();

let base = Number(prompt("Enter base number :  "));
let exposant = Number(prompt("Enter base number :  "));

let res = 1;


for(let i = 0 ; i < exposant ; i++){

    res =  res * base;
}

console.log(res);