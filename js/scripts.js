// var myName = "Angelica";

// console.log("I would like to learn all I can about Javascript and get all the knowledge I need to know about the Javascript. I hope this class will be challenging but fun :) Also my favorite hobby is Taekwondo, playing video games, or web developement.");

// var myName = "Angelica";
// let birthday = newDate ('3.31.2004');
// const goal = 'To become a developer';
// // console.log(name, birthday, goal);

// let favMovie = 'Jumanji';
// let favFood = 'steak';
// const movieYear = new Date(1/1/2017);
// const ingrediants = ['steak', 'rice', 'fries', 'fish'];
//
// alert(favFood + ingrediants);
// confirm(favMovie + movieYear);

// let yourName = "What is your first name?";
// console.log(prompt(yourName));
// let yourLastName = "What is your last name?";
// alert(prompt(yourLastName));
// let yourBirthday = "When is your birthday?"
// confirm(prompt(yourBirthday));

let yourName = "What is your name?";
prompt(yourName);
let favColor = Prompt('give me your fav color', '...');

switch(favColor.upperLowerCase) { //normalize the data
  case 'blue';
    alert(`${favColor} is my favorite too!`);
    break;
  //...  
  default:
      alert(`Hey${name}, that's not a valid option.`)

}
