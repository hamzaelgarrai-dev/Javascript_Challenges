var prompt = require('prompt-sync')();

let num = Number(prompt("Enter number : "));

const compteRebours = (x)=>{

   for(let i = x ; i >= 0 ; i--){

    console.log(i);;
   }

}

compteRebours(num);
