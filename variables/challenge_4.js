var prompt = require('prompt-sync')();

let vitesseKm = parseFloat(prompt("enter le vitesse en km : "));

let vitesseMs = vitesseKm * 0.27778;

console.log(`your vitesse in Ms is ${vitesseMs}`);