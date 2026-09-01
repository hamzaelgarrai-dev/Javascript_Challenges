var prompt = require('prompt-sync')();

const n = parseInt ( prompt ( "choose number" )); 

if (n % 2 == 0 ){ 
  console . log ( "The number is upair" ); 
} else { 
  console . log ( "The number is impair" ); 
}