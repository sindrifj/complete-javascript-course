"use strict";


// basic fall
 function logger(){
    console.log("Hi Sindri");
 }
// kalla fall
 logger();


 function fruitPros(apple, oranges){
    console.log(apple,oranges);
    const juice = `juice with ${apple} ${oranges}` ;
    return juice;
 }


console.log(fruitPros(5,0));

/* það er hægt að kalla decleratin áður en fallið er til semsagt hægt að setja það í variable áður
function decleration
*/
const age1 = calcAge(1991) // hér köllum við fallið áður en það er búið til
function calcAge(birthYear) {
    return 2037 - birthYear
}

//function expression ekki er hægt að kalla fallið fyrr en það er búið að búa það til.
const calcAge2 = function (birthYear){
    return 2037 - birthYear
}
const age2 = calcAge(1991);

console.log (age1, age2);

// arrow function

// þetta er bara hægt ef það er bara eitt sem þarf að vinna úr
const calcAge3 = birthYeah => 2037 - birthYeah; 

// annars þurfum við að gera svona

const yearsUntilRetirement = (birthYeah, firstName) => {
    const age = 2037 - birthYeah;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
  }
  
  console.log(yearsUntilRetirement(1991, 'Jonas')); console.log(yearsUntilRetirement(1980, 'Bob'));
