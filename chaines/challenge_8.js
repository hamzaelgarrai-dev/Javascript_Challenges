var prompt = require('prompt-sync')();

let word = prompt("Enter your String : ");

let converted = word.toLocaleLowerCase();

console.log(converted);