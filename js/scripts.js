// let products = [["blanket", [12.99], "The best blanket around", [13.22], "rattle", [7.84], "The best rattle ever made", [10.25]]]
//
// //let i = 0;
//
// while (i < products.length) { //parameters
//   //console.log(products[i]);
//   i++; //Incrementor
// }
//
// //console.log(i);
//
//
// for(let i = products.length - 1; i >= 0; i--) {
//   console.log(products[i]);
// }
//
//
// //while loop
// let i = 0;
// let newProduct = ["Squeeky Toy", 19.99, "Really good toy."];
// do {
//   // Add newProducts to the second member of the Products array
//   if(i === 1) products[i].push(newProduct);
//   i++;
// } while(i < products.length);
//
// //console.log(Products);
//
//
// products.forEach((product) => {
//   console.log(product);
// })




//FUNCTIONS
function capitalCase(string) { //FUNCTION DEFINITION
  let words = string.split(' ');
  words.forEach(word) => {
    let letters = word.split('');
    let capped = letters[0].toUpperCase();
    word.splice(0, 1, capped);
  });
  return words.join(' ');
};


let newString = capitalCase("peter piper"); //function CALL

// console.log(newString);

let capsName = capitalCase("captain america");

// console.log(capsName);


// myCoolFunction("cheese");

let myCoolFunction = function(stuff) => {
  console.log(stuff);
}

let myCoolFunction = (stuff, things, etc) => {
  console.log(stuff);
}


function divide (arg1, arg2) {
  return arg2 / arg1;
}


//TRY IT OUT DAY5
function ageDog(years) {
  if(!isNaN(years)) return years * 7;
};

alert(ageDog(pareInt(prompt("How old is your dog in years?", "3"))));


const number = 80;

function agePerson(years) {
  return
}

function productUsedPerDay(days) {

}

prompt("How old are you currently?", "Less than 80");
