var prompt = require('prompt-sync')();

let yearNumber = Number(prompt("how many year you want to calculate : "));

console.log("chose an option : \n month : 1 \n days  : 2 \n houres : 3 \n minutes : 4 \n seconds : 5 ");

let option = Number(prompt("enter your option :  "))

let res = 0 ;

switch (option) {


    case 1 : res = yearNumber * 12

    console.log(res);

    

}