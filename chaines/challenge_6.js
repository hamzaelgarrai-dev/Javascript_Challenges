var prompt = require('prompt-sync')();

let char = prompt("Enter your char : ");
let string = prompt("Enter your string : ");

let tab = string.split('');


let count = 0;




for(let i = 0 ; i < string.length ; i++){

    if(tab[i].toUpperCase() === char.toUpperCase()){

        count++;
    }


}

console.log(count);



