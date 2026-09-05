var prompt = require('prompt-sync')();

let itr = Number(prompt("Enter the number of itteration :"));
let fact = Number(prompt("Enter the factor :"));


let tab = [];

for(let i = 0 ; i < itr; i++ ){
    
    let num = Number(prompt("Enter the number :"));
    
    tab[i] = num;
    
}

tab.forEach((item , index)=>tab[index] =  item*fact);

console.log(tab);