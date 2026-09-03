var prompt = require('prompt-sync')();

let num = Number(prompt("Enter number : "));

const fibonacci =(x) =>{

     let F0 = 0;
    let F1 = 1;
    let Fn;
    for(let i = 0 ; i < x ; i++){
        Fn = F0 + F1;
        F1 = F0;
        F0 = Fn;
    }
    return F0;


}

let res = fibonacci(num);

console.log(res);

