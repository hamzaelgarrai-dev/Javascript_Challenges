var prompt = require('prompt-sync')();

let firstString = prompt("Enter your first string : ");
let secondString = prompt("Enter your second string : ");

let result = firstString + secondString;

console.log(result.trim);
