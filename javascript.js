//const name = 'Prince';
//const age = 35;
// console.log(`My name is ${name} and I am ${age}`);
//console.log(name.substr(0,4).toUpperCase())
/* old arrays
let numbers = new Array(1,2,3,4,5);
console.log(numbers); */
/* let numbers = [1,2,3,4,5];
let fruit = ['harith',7];
let colle = numbers.concat(fruit);
colle.push(8);
colle.unshift('Prince');
colle.pop()
console.log(colle);
console.log(colle.indexOf('Prince'));*/

/*const person = {
  firstName: 'Prince',
  lastName: 'Shanks',
  age: 35,
  hobbies: ['music', 'movies', 'sports'],
  address: {
    street: 'Aljamaa Street',
    city: 'Jeddah',
    state: 'MK'
  }
}

console.log(person.hobbies[1]);
console.log(person.hobbies);
console.log(person.firstName, person.lastName);
console.log(person.address.state);
// adding prp
person.email = 'princ@gmail.com'
console.log(person)*/
/*
const todo = [
  {
    id: 1,
    text: 'Take out trash',
    isComleted: true
  },
  {
    id: 2,
    text: 'Meeting with boss',
    isComleted: true
  },
  {
    id: 3,
    text: 'Dentist appt',
    isComleted: false
  },
];
*/
//console.log(todo[1].text);
// Conver to JSON
/*const todoJSON = JSON.stringify(todo);
console.log(todoJSON)*/

// For Loop
/*for(let i = 0; i <= 10; i++) {
  console.log(i)
}

// While
let i = 0;
while(i <= 10) {
  console.log(i);
  i++
}*/
/*
for(let i = 0; i < todo.length; i++) {
  console.log(todo[i].id, todo[i].text, todo[i].isComleted)
}
console.log('----------------------------')
// another way

for(let res of todo) {
  console.log(res.text);
}
console.log('----------------------------')
// another way
//todo.forEach(function(res) {
  console.log(res.text);
});
console.log('----------------------------')
// another way
const todoText = todo.map(function(res) {
  return res.text;
});
console.log(todoText);
console.log('----------------------------')
// another way
const textTodo = todo.filter(function(res) {
  return res.id == 1;
});
console.log(textTodo);
*/


//----------conditions -------------
/*
const x = 10;
const y = 5;
if(x > 10 && y < 6) {
  console.log(`X is equel to ${x}`);
} else if(x > 10) {
  console.log(`X is not greater than ${x}`);
} else {
  console.log(`X is not equel to ${x}`);
}

const z = 6;
const color = z < 10? 'red' : 'blue';
console.log(color)
*/
/*
const x = 11;
const color = x > 10? 'red' : 'blue';

switch(color) {
  case 'red':
    console.log('Color is red');
    break;
  case 'blue':
    console.log('Color is blue')
    break;
}
*/

// ------------OOP -------------------

/* const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  draw: function() {
    console.log('draw')
  }
};

circle.draw(); */


// -----------Factory Function ----------------
function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log('draw')
    }
  };
}

const circle = createCircle(1);

// -----------Constructor Function ----------------

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  };
}

const c1 = new Circle(1);