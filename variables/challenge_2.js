var prompt = require('prompt-sync')();

let celesiusTemp = parseFloat( prompt("Enter the temperature en celsius :"));

let kalvinTemp = celesiusTemp + 237.15;

console.log(`the temperature en kalvin is ${kalvinTemp}`);
