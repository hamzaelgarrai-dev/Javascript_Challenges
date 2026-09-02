var prompt = require('prompt-sync')();

let n = parseInt(prompt("Enter the number :"));

console.log(`Table de multiplication de ${n} :`);

for (let i = 1; i <= 10; i++) {
    let resultat = n * i;
    
    console.log(`${n} * ${i} = ${resultat}`);
}