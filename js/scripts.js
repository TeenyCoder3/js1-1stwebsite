// DAY 6
//
// let body = document.getElementsByTagName('body'); //this will give you back an array.
// console.log(body);
//
// let classes = document.getElementsByClassName("my-header");
// console.log(classes[0]);
//
// let id = document.getElementById("my-paragraph");
// console.log(id);
//
// //Newer Methods:
// let tags = document.querySelector('body');
// console.log(tag);
//
// let class = document.querySelector('.my-header');
// console.log(myClass);
//
// let myId = document.querySelector('#my-paragraph');
// console.log(myId);
//
// let tags = document.querySelectorAll('body');
//
// //Try it out day6
// function queryDom(methodName, element) {
//   switch(methodName.toLowerCase()) {
//     case 'getelementsbytagname';
//       document.getElementsByTagName(element);
//       break;
//     case 'querySelector':
//       document.querySelector(`.${element}`);
//       break;
//     default;
//       break;
//   }
// };
//
//
//
//
//
//
//
//
//
// //         DAY 7
//
//
//
//
//
// //e stands for event
//
// let myClass = document.querySelector('my-header');
//
// myClass.addEventListener(
//   'click', //first arg
//   e => {  //second arg CALLBACK function
//     alert('you clicked on me!!!');
//   }
// )
//
// console.log('hello world!');



// let button = document.querySelector('.myBtn');
// let div = document.querySelector('div');
// let h1 = document.querySelector('h1');
//
// button.addEventListener('click', e => {
//   e.target.textContent = "Goodbye Cats!";
// })
//
// div.addEventListener('mouseenter', e => {
//   e.target.style.backgroundColor = "#e40007";
//   console.log(e);
// })
//
// h1.addEventListener('mouseleave', e => {
//   e.target.style.color = '#00ffff';
// })





//  let button = document.querySelector('button');
//  let div = document.querySelector('div');
//  const body = document.querySelector('body');
//  button.addEventListener('click', e => {
//    e.target.textContent = "Goodbye Cats!";
//  })
//
// div.innerHTML = "<p>lorem ipsum dolores cantu!!!</p>"; //This inserts the text in quotes into the div.
// let newH1 = document.createElement('h1');
// newH1.textContent = "Login Here!!";
// //body.appendChild(newH1);
// newH1.classList.add("text-center");
// body.insertBefore(newH1, div);
//
// div.id = "red_text";
//
// div.classList.add('text-center');
//
// div.addEventListener('click', e => {
//   div.classList.toggle('text-center'); //Comes back as true or false // Pretty cool stuff
//   div.classList.replace('blue-background', 'green-background');
// })
// let myImg = document.createElement('img');
//
// //Set the src attribute
// myImg.setAttribute('src', 'https://cbsnews2.cbsistatic.com/hub/i/r/2016/07/23/3dd92592-44a8-459b-8418-ffdc1cc05e60/resize/620x465/29246f341fc584bb4fb34db5bfd115df/enterprise-studio-model-dane-penland-smithsonian-national-air-and-space-museum.jpg');//Add the image to the page.
//
// div.appendChild(myImg);
// console.log(myImg);














//COUNTING FROM 1 TO 100
//IMPORTANT!!
// let body = document.querySelector('body');
//
// for (var i = 1, i <= 100, i++) {
//   let p = document.createElement('p');
//   if(i % 3 === 0 && i % 5 === 0) {
//     p.textContent = 'FizzBuzz';
//   } else if (i % 5 === 0) {
//     p.textContent = 'Buzz';
//   } else if (i % 3 === 0) {
//     p.textContent = 'Fizz';
//   } else {
//     p.textContent = i;
//   }
//   body.appendChild(p);
// }









//DAY 9


//
// console.log();
// let passwordInput = document.forms.login.password;
// let emailInput = document.forms.login.email;
// let myPTag = document.querySelector('#data_binding')
// let submit = document.forms.login.submitBtn;
// emailInput.addEventListener('keyup', e => {
//   myPTag.textContent = e.target.value;
// })
//
// submit.addEventListener('click', e => {
//   if(passwordInput.value === '' || emailInput.value === '') {
//     submit.disabled = false;
//   }
// })



// let user = {
//   name: "Henry",
//   password: 12345,
//   status: "active"
// };
//
//
// let guest = {
//   name: "Guest",
//   password: undefined,
//   status: "inactive"
// }
//
// let newScope = {
//   name: "Peter Piper",
//   password: "bag o peppers",
//   instrument: "Pipes",
//   myFunction: logMyName
// }
//
// newScope.myFunction("Fly away"); //IMPLICIT
//
// function logMyName(greeting, ado) { // definition
//   console.log(this.name, this.password);
//   alert(`${greeting}, ${this.name}!`);
// }
// //
// // logMyName.call(user, "Hello", "Goodbye");  //call site
// // logMyName.call(guest, "Sign up", "Goodbye");
//
// let classScore = 90;
//
// const scopeOne = {
//   classScore: 75,
//   scopeTwo: {
//     classScore: 50
//   }
// };
//
// console.log(classScore);
// console.log(scopeOne.classScore);
// console.log(scopeOne.scopeTwo.classScore);



















//DAY 10




// let object1 = {}
// let object2 = new Object()
//
// let person = {
//   firstName:"Angelica", //[firstname, "Angelica"]
//   lastName: "Arellano"
//   age: 14,
//   favoritesL ["cookies", "pizza"],
//   desc: {
//     hairColor: "brown"
//   }
// }
//
// object1.food = "pizza";
//
// object1['color'] = 'pink';
// console.log(object1)
// console.log(object1.age)

// for in

// for(let key in person){
//   console.log('key',key)
// }



//for .. of

// for(let [key, value] of Object.entries(person)){
//   console.log(key, values)
// }

// let newObj = Object.create(object1);
// newObj.flower = 'rose';
//
// newObj.color = 'yellow';
// console.log('newobj', newObj);
// console.log('object1', object1);
