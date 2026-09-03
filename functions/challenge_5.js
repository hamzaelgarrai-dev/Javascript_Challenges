var prompt = require('prompt-sync')();

let num = Number(prompt("Enter number : "));


const factor = (x) => {

    let factorielle = 1;
    for (let i = 1; i <= x; i++) {

       factorielle *= i
    }

    return factorielle

}

let res = factor(num);

console.log(res);



