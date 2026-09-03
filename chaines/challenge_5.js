var prompt = require('prompt-sync')();

let word = prompt("enter our string : ");

let reversed = word.split('').reverse().join('');

console.log(reversed);