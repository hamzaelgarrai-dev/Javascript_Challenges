var prompt = require('prompt-sync')();

let string = prompt("Enter your string : ");
let subString = prompt("Enter your substring : ");

if(string.includes(subString)){
    console.log("the substring exist in the string")}
    else{
        console.log("the substring not exist");
    }
