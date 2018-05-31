
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

let iAmWearingYellow = false

iAmWearingYellow ? "yes i am wearing yellow" : "no i am not";

let number = 23;

let num = (number = 23 || iAmWearingYellow) ? "number = 23 and yellow" : "number not 23 and/or not yellow"
console.log(num)
