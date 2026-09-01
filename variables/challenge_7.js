var prompt = require('prompt-sync')();

let number1 = parseFloat(prompt("Enter the first number : "));

let number2 = parseFloat(prompt("Enter the second number : "));

let number3 = parseFloat(prompt("Enter the third number : "));

let moyenne = (number1 * 2 + number2 * 3 + number3 * 5) / (2 + 3 + 5);

console.log(`the moyenne is :, ${moyenne}`);