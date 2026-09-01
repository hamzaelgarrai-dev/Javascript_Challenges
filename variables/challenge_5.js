var prompt = require('prompt-sync')();

let celesiusTemp = parseFloat( prompt("Enter the temperature en celsius :"));

if(celesiusTemp < 0 ){

    console.log("water is solide");
}
if(celesiusTemp >= 0 && celesiusTemp < 100 ){
    console.log("liquide");
}
if(celesiusTemp >= 100){

    console.log("gaz");

}