var prompt = require('prompt-sync')();

let distanceKm = parseFloat(prompt("enter the distance en km : "));

let distanceYrd = distanceKm * 1093.61;

console.log(`your distance in yard is ${distanceYrd}`);