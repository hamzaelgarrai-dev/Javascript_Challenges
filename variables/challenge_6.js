var prompt = require('prompt-sync')();

let a = parseFloat(prompt("Enter the first number : "));

let b = parseFloat(prompt("Enter the second number : "));


let addition = a + b ;
let substraction = a - b ;
let multiplucation = a * b ;
let division = a / b ;

console.log(`${a} + ${b} = ${addition.toFixed(2)}`);
console.log(`${a} - ${b} = ${substraction.toFixed(2)}`);
console.log(`${a} * ${b} = ${multiplucation.toFixed(2)}`);
console.log(`${a} / ${b} = ${division.toFixed(2)}`);