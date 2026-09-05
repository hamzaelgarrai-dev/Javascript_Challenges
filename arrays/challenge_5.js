var prompt = require('prompt-sync')();

let itr = Number(prompt("Enter the number of itteration :"));

let tab = [];

for(let i = 0 ; i < itr; i++ ){
    
    let num = Number(prompt("Enter the number :"));
    
    tab[i] = num;
    
}

let min = tab[0];

for(let i = 1 ; i < tab.length; i++ ){

    if(tab[i] < min){
        min = tab[i]
        
    }

   

}

console.log(min);