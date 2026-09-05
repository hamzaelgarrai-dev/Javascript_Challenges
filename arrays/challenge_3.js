var prompt = require('prompt-sync')();

let itr = Number(prompt("Enter the number of itteration :"));

let tab = [];
let count = 0;

for(let i = 0 ; i < itr; i++ ){

    let num = Number(prompt("Enter the number :"));

    tab[i] = num;

}

for(let i = 0 ; i < tab.length; i++ ){

    count = count + tab[i];

}

console.log(count);

