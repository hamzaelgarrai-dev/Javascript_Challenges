var prompt = require('prompt-sync')();

let itr = Number(prompt("Enter the number of itteration :"));



let tab = [];

for(let i = 0 ; i < itr; i++ ){
    
    let num = Number(prompt("Enter the number :"));
    
    tab[i] = num;
    
}


for (let i = 0; i < tab.length; i++) {

    for (let j = 0; j < tab.length - 1; j++) {

        if (tab[j] > tab[j + 1]) {

            let temp = tab[j];
            tab[j] = tab[j + 1];
            tab[j + 1] = temp;
            
        }

    }
}

console.log(tab);