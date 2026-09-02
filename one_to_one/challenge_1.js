var prompt = require('prompt-sync')();

let weekend = prompt("weekend : yes or no ? :");

let age = Number(prompt("enter your age : "));

if(age < 5){
    console.log("gratuit");
}
else if( age >= 5 && age < 24){
     if(weekend == "yes" ){
        console.log("70");
     }
     if (weekend == "no" ){
        console.log("80");
     }
    }
else if(age >= 24 && age < 27){

    if(weekend == "yes" ){
        console.log("80");
     }
     if (weekend == "no" ){
        console.log("80");
     }
}else{
    console.log("100");

}


     
