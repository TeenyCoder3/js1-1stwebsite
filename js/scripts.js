
// let inside = true;

// if(inside){
//   console.log('i am inside')
// } else {
//   console.log('i am not inside')
// }

//condition ? expression1 : expression2
//
// example2 = inside ? "i am inside" : "i am not inside"
// //console.log(example2)
//
// let number = 10
//
// let number > 20 ? "number is greater than 20" : "number is less than 20"
// //console.log((number > 20) ? "number is greater than 20" : "number is less than 20")
// console.log(number)
//
// let number = 5;
//
// console.log(number > 10 ? "number is greater than 10" : "number is less than 10")
//
//let name = false;
//let email = true;
//
// if(name) {
//   console.log("I have name")
// }
// else if (email){
//   console.log("I have email")
// }
// else {
//   console.log("I have none")
// }

//name ? "i have name" : email ? "i have email" :  "i have none"
//console.log(name ? "i have name" : email ? "i have email" :  "i have none")

// let iAmHungry = true;
// let money = 5;
//
// iAmHungry ? ((money > 10) ? "i am hungry and i have more than 10" : "i am hungry and i have less than 10") : ((money > 10) ? "i am not hungry and i have more than 10" : "i am not hungry and i have less than 10" );
// //
// if (iAmHungry) {
//   if (money > 10) {
//     'i am hungry and i have more than 10'
//   }
//   else {
//     'i am hungry and i have less than 10'
//   }
//   else {
//   if (money > 10) {
//     ' i am not hungry and i have more than 10'
//   }
//   else {
//    'i am not hungry and i have less than 10'
//   }
//   }
// }
//
// let iAmWearingYellow = false
//
// iAmWearingYellow ? "yes i am wearing yellow" : "no i am not";
//
// let number = 23;
//
// let num = (number = 23 || iAmWearingYellow) ? "number = 23 and yellow" : "number not 23 and/or not yellow"
// console.log(num)
//


































// // // create a program that...
// let firstName = prompt("What's your name?", "Vinny V");
// console.log(firstName);
// let lastName = prompt("what's your last name", "Baal");
// alert("Your last name is " + lastName);
//
// // //homework for day 2 was made ambiguous on purpose due to real life ideas
//
// let birthday = prompt("What's your birthday?", "May 21, 1980");
//
// //give example to help reduce user error
//
// confirm("Is " + birthday + " your birthday?");
// confirm(`Is ${birthday} your birthday?`); //ES6 string interpelation
//
// // //use CONST or LET unless that variable is GLOBAL, then use var.
// // //let and const is more protected. const should never be changed.
//
//
// var myName = "Ryeker";
//
//  alert('Hello, ' + myName + '!'); //ES5
//
//  alert(`Hello, ${myName}!`); //ES6
//
// // ES6 is to do

//logical operators
//
// const name = null;
// const age = 32;
//
// console.log(name && age);
//
// // if(!name && age){
// //   alert('one exist');
// // }
// //once js found one variable that is true, it will skip over the second one.
//
// const numAge = 32;
// const stringAge = '32';
// //
// // // if(anotherAge !== stringAge) {
//   // alert("they're the same!");
//   //}
//
// let objectOne ={
//   name: "vien"
// };
//
// let objectTwo ={
//   name: "vien"
// };
//
// // alert(objectOne == objectTwo); //returns false. ALWAYS FALSE!!!

//two ways to save variable. one is pointer and one is reference.
//js save everything by reference, except for object. object are stored in a different place in memory
//two objects will never equal to each other.
//js only does pointer/store in memory with OBJECTS. DATA type objects, not object, like DOM stuff.
//preset yes, but objects, objects that are not preset, will not work.

// if(numAge <= stringAge.length) { //js converts stringAge into an object and then gives you a length and give it back.
//   alert("hi");
// }
//length counts spaces too.

// var myString = "primitive";
// var objString = new String("primitive");
//
// if (myString == objString) {
//   alert("they are loosely equal");
// }
// if (myString !== objString);{
//   alert("they are not strictly equal");
// }
// var loose = (myString == objString);
// var strict = (myString === objString);
//
// console.log(loose);
// console.log(strict);
//
// let limit = 12;
// console.log(limit);
// limit += 7; // same as limit + 7; possible use in the final project.
// console.log(limit);

//NaN example

// let myNumber = "cheese";
//
// console.log(myNumber++);
//
// //how do you check if the value is not a number? isNaN() --> function built in to do that.
//
// isNaN("cheese") //this statement is true. cheese is not a number.
// isNaN("21") //this will be false, because 21 is a number.
//
// //!isNaN(myNumber)---"i'm checking is myNumber is NOT a number"
//
// let userNumber = parseInt(prompt("give me a number", "10")); //or put it in from the beginning.
// let userNumber2 = parseInt(prompt("give me another number", "10"));
//
// // userNumber = parseInt(userNumber);  --redefeine
// // userNumber2 = parseInt(userNumber2);
//
// let totalNumber = userNumber + userNumber2; //or alert (numOne + numbTwo)
//
// alert(`The total sum of your number is ${totalNumber}.`);
//
// //Three ways to do CONTROL FLOW: if else statments,
//
// if(userNumber > userNumber2){ //--> if the things is parenthese is true
//   alert('The first number is larger'); //do this
// } else if (userNumber === userNumber2) { //if that first thing is not true, do the next block of code.
//   alert('They are the same!');
// } else if (userNumber < userNumber2){
//   alert("The second number is larger");
// } else { //if none of the above is true, do the next block.
//   alert("Something is wrong");
// }
//
// //if we wanted to check two conditions use the &&
//
// //SECOND way to control flow is SWITCH statements; like if else but cleaner.
//
// let firstName = prompt("What is your first name?", "Tom");
// //DRY coding= DON'T REPEAT YOURSELF
//
// switch(firstName.toLowerCase()) { //switch and add the varible we checking/ add toLowerCase, force it to be lowerCase so we can compare with our code.
//   case 'tom': //same as if firstName === Tom, USE A REGULAR COLON; checks for loose equals.
//     alert("Hi Tom!"); //do something
//     break; //switch needs a BREAK statement to end it.
//   case "john":
//     alert("your name is very common.");
//     break;
//   case "bob": //this is how to do && with switch statements, just add the case on the next line.
//   case "davy":
//   case "king":
//     alert("boo");
//     break;
//   default: //same as ELSE in if else {
//     alert("I've never heard that name before.");
//     break;
//   }
//
// let arr = ["javascript", 100, {}, [], true];
//
// console.log(arr[6]);

//Try it out #1
// var favs = ['jumanji', 3, false, 2022];
// console.log(Array.isArray(favs));
//
// console.log(favs);
//
// favs.push("Steak");
//
// console.log(favs);
// const removed = favs.pop();//remove first item in array and returns removed item to you as variable //'first'.
// console.log(favs);
//
// let first = favs.shift();
// console.log(favs, first);


//console.log(favs[favs.length - 1]);
//The minus one takes away from the total number of the items in the Array
//Therefore selecting the last one.
//
// let favs = ['Jumanji', 3, false, 2022];
// favs.sort();
// console.log(favs);
//
// //favs.splice(2, 1); // with , 1 this means you are only splicing 2 not everything else after that.
//
// favs.splice(2, 1, false, "Angelica", "Rocky");
// console.log(favs, "this is the result of splice");
//
// const products = [["blanket", [12.99, 10.99], "The best blanket around"]. ['rattle', 4.99, "It rattles man..."], ['diapers', 12.99, 'They catch the doo doo']];
// alert(products[0][1][1]);
//
// //let copy = products.slice();
//
// console.log(favs.indexOf("Jumanji"));

let favMovies = ["Jumanji", "Benji"]
let secondMovies = ["SpiderMan", "Infinity War"]
let thirdMovies = ["Darth Vader", "Empire Strikes Back"]

let allMovies = [favMovies, secondMovies, thirdMovies]

alert(allMovies);

let unfavMovies = ["Jumanji", "Empire Strikes Back"]
console.log(unfavMovies);
alert(favMovies);

// let favoriteMovies = [];
//
// favoriteMovies.push(favMovies, secondMovies, thirdMovies);
//
// let titles = [];
// titles.push(favoriteMovies[0][0], favoriteMovies[1][0]);
