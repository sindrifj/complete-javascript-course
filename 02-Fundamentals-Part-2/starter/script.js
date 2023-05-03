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


  const friends = ["Sindri","Einar "]

  friends.length // lengd
  friends[0] // stak 0
  friends.push("maggi") // bæta við afstast listann skilar lengd listans
  friends.unshift("Palli") // bætir við fremst í listann
  friends.pop() // eyðir aftasta stakinu skilar eyddu staki
  friends.shift() // eyðir fremsta stakinu
  friends.indexOf("Sindri") // sýnir númerið á staki
  friends.includes("Sindri") // skilar true ef það er til staðar í lysta

const notandi = {
    forNafn: "Sindir",
    eftirNafn: "Fanndal"
}

console.log(notandi.forNafn)
console.log(notandi["eftirNafn"]) // nota þetta frekar til að taka á móti streng og leita af honum.

// bæta við 
notandi.stadur = "Garður";
notandi["heimilisfang"] = "birkitún"
console.log(notandi)

// hægt er að nota function í object svona 
const notandi2 = {
    forNafn: "Sindir",
    eftirNafn: "Fanndal",
    faedingarAr: 1986,
    calcAge3: birthYeah => 2037 - birthYeah,
    calcAge4: function () {
        return 2037 - this.faedingarAr; // this er objectið semagt notandi2
    },
    
    calcAge5: function () {
        this.aldur = 2037 - this.faedingarAr;
        return this.aldur;
    }
};

console.log(notandi2.calcAge3(2000));

// vitna í object í function sem dæmi erum við að nota faedingarar til að reikna út aldur
console.log(notandi2.calcAge4());

// best er samt að reikna valuið þegar objectið er búið til og sækja það svo þegar maður þarf
console.log(notandi2.calcAge5());
console.log(notandi2.aldur);


// búum til variable fyrst síðan ef variable er undir eða sama og 10 þá bætum við einum við 
for(let rep = 1; rep <= 10; rep++){
    console.log(`wirk ${rep}`)
};

// rúlla í gegnum lista
const listi = ["sidnri","Kalli","Einar"];
for (let i = listi.length -1; i >= 0; i-- ){
    console.log(listi[i]);
}

for (let exer = 1; exer < 4; exer++){
    console.log(`starting exer ${exer}`);
    for (let rep = 1;rep < 6; rep++){
        console.log(`reps ${rep}`)
    }
}
// notum while ef við þurfum ekki counter
let rep = 1
while (rep <= 10){
    console.log(`WHILE reps ${rep}`);
    rep++;
}