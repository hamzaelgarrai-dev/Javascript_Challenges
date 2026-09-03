var prompt = require("prompt-sync")();

let firstString = prompt("Enter your first string : ");

let secondString = prompt("Enter your first string : ");



if(firstString.toUpperCase() === secondString.toUpperCase()){
    console.log("string are equals");
}
else{

    console.log("string are not equals");

    

}