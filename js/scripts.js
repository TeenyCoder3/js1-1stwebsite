// // DAY5 TAKEHOME
//
// let todos = [];
//
// let todo1 = [prompt("What do you want to do first?", "Swimming")]
// let todo2 = [prompt("What do you want to do second?", "Eat")]
// let todo3 = [prompt("What do you want to do third?", "Coding")]
//
// todos.push(todo1, todo2, todo3);
//
// for(let i = 0; i < todos.length; i++) {
//
//   let timeline = prompt(`How many days will it take to get ${todos[i][0]} done?`, "2");
//
//   timeline = !isNaN(parseInt(timeline)) ?
//   parseInt(timeline) : 2;
//
//   todos[i].unshift(timeline);
// }
// console.log(todos, 'after adding time it will take');
//
// todos.sort();
// console.log(todos, 'after sort');
//
// let longest = todos[0];
// let j = 0;
// while(j < todos.length) {
//   if(todos[j][0] > longest[0]) longest = todos[j]
//   // console.log(todos[j][1]);
//   j++;
// }
//
// longest.push('this');
//
//
// let z = 0;
// do {
//   if(todos[z][todos[z].length - 1] !== "this") {
//     todos[z].push("done");
//   }
//   z++;
// }while(z < todos.length);
//
// let doneItems = [];
//
// todos.forEach(
//   todo => {
//     if(todo[todo.length -1] === 'done') dontItems.push(todo);
//   }
// );
//
// alert(doneItems);












//TAKEHOME 5

function powerOfTwo(number) {
  if(!isNaN(number)) {
    return number * number;
  } else {
    alert("NaN");
    let answer = powerOfTwo(parseInt(prompt("That wasn't a number! What number?", '2')));
    alert(answer);
  }
};

alert(answer);

//Takehome 2.
function parseString(string) {
    let parsedLetter = string.charAt(0).toUpperCase();
    let stringArr = string.split('');
    stringArr.splice(0, 1, parsedLetter);
    string = stringArr.join(''); // Replaces the first letter with the new uppercase.
    if(string.charAt(string.length - 1) !== '.') string = string + '.';
    return string;
}

//let answer = parseString(prompt("Type something in", "I heart cheese"))
//alert(answer);

//Takehome 4.
function reverseHalves(string) {
  let halfIndex = string.length / 2;
  let firstHalf = string.subString(0, halfIndex);
  let secondHalf = string.subString(halfIndex, string.length);
  alert(`${secondHalf}${firstHalf}`);
}

// reverseHalves(prompt("give me a sentence", "hello world!"));

//Takehome 5.
function isPalindrome(string) {
  let reversed = string.split('').reverse().join('')
  if string === reversed) return true;
  return false;
}







//DAY6

//
// function lifetimeCalculator(age, dailyUse) {
//   if(!isNaN(age) && !isNaN(dailyUse)) {
//     const death = 80;
//     return (death - age) * (dailyUse * 365)
//   }else {
//     userAge = prompt('how old are you?', '30');
//     userUse = prompt("How much do you use everyday?");
//     lifetimeCalculator(parseInt(userAge), parseInt(userUse));
//   }
// };
//
// let userAge = prompt('how old are you?');
// let userUse = prompt("How much do you use everyday?", "1");
