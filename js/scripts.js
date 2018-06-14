let body = document.getElementsByTagName('body'); //this will give you back an array.
console.log(body);

let classes = document.getElementsByClassName("my-header");
console.log(classes[0]);

let id = document.getElementById("my-paragraph");
console.log(id);

//Newer Methods:
let tags = document.querySelector('body');
console.log(tag);

let class = document.querySelector('.my-header');
console.log(myClass);

let myId = document.querySelector('#my-paragraph');
console.log(myId);

let tags = document.querySelectorAll('body');

//Try it out day6
function queryDom(methodName, element) {
  switch(methodName.toLowerCase()) {
    case 'getelementsbytagname';
      document.getElementsByTagName(element);
      break;
    case 'querySelector':
      document.querySelector(`.${element}`);
      break;
    default;
      break;
  }
};
