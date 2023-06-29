'use strict';

// ******************************************************** Scoping in practice
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  // Jonas here was printed to the console, which is the first name variable. And so when this line of code here was
  // executed, JavaScript did not find this variable in the scope. And so it did a variable lookup, where it looked up
  // in the scope chain to see if it found the variable there. And indeed, the parent scope of the calcAge function is
  // the global scope. And the first name variable is in there, and therefore JavaScript could then use that.
  console.log(firstName);
  return age;
}

const firstName = 'Jonas';
console.log(1991);
*/
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    // const output = `${firstName}, You are ${age}, born in ${birthYear}`;
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      // declaring same variable which is already in outer scope, and if we use firstName in this scope it will show
      // 'Steven' because JavaScript tries to look for the variable name in the current scope. And right now, it
      // actually is in the current scope.
      const firstName = 'Steven';

      // Reassigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you are a millenial, ${firstName}`;
      console.log(str);

      // this function is block-scoped, will not be accessible outside of his block
      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str); // Error
    console.log(millenial); // accessibe, as millenial is declaed using var which is not block scoped
    // console.log(add(2, 3)); // Error in strict mode, as this function is block-scoped
    console.log(output); //'NEW OUTPUT!' : As it is manipulated inside if block
  }
  printAge();
  return age;
}

const firstName = 'Jonas';
console.log(1991);
// console.log(age); // Error: as we don't have access to these as it is not defined in this scope.
// printAge();
*/

// *************************************************** Hoisting and TDZ in practice
/*
// Variables
console.log(me);
// console.log(job); // ReferenceError because of TDZ
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));
console.log(addExprWithVar); //undefined
// console.log(addExprWithVar(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a * b;
};

const addArrow = (a, b) => a * b;

var addExprWithVar = function (a, b) {
  return a * b;
};

// Example
// Calling this deleteShoppingCart under impressiom that numProducts is 10 but actually it's undefined because of
// hoisting, which may lead to a serious bug, so that's the reason we should avoid using var

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

// Diff b/w var and let,const
var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); // false

function test() {
  console.log('function declarartion: ', this);
  const arr = () => {
    console.log('arrow function: ', this);
  };
  arr();
}
test();
 */

// *************************************************** The this in practice
/*
console.log(this); // window object

const calcAge = function (birthYear) {
  console.log(2022 - birthYear);
  console.log(this); // undefined in strict mode
};
calcAge(1993);

const calcAgeArrow = birthYear => {
  console.log(2022 - birthYear);
  console.log(this); // window, because arrow function uses lexical this(parent's scope)
};
calcAgeArrow(1993);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

console.log('method borrowing');
matilda.calcAge = jonas.calcAge; // method borrowing
matilda.calcAge();

const f = jonas.calcAge;
f(); // will see undefined because now this is regular function call, f is not attached to any object.
 */

// ************************************************ Regular Functions vs. Arrow Functions
/* 
// var firstName = 'Matilda'; //firstName will be added to window object, hence inside greet(), this.firstName will
// resolve to Matilda which is not good at all

const jonas1 = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },

  greet: () => console.log(`Hey ${this.firstName}`), // Hey undefined, because arrow function doesn't have it's own this
  // keyword so it will use this from it's surrounding scope which is global window object and firstName is not defined
  // there.
};
jonas1.greet();

const jonas2 = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    const isMillenial = function () {
      console.log(this); // undefined, because this is regular function call even though it happens inside of a method.
      // And the rule says that inside a regular function call, which this clearly is, that this keyword must be undefined.
      // console.log(this.year >= 1981 && this.year <= 1996); // error
    };
    isMillenial();
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};
jonas2.calcAge();

// Soltution to above problem
const jonas3 = {
  firstName: 'JOnas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // Solution 1: By preserving this (Pre ES6 solution)
    // const self = this; //self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2: Using arrow function ( ES6 solution)
    // Since arrow function simply uses this keyword of its parent scope. And in this case, that will be the calcAge
    // method, and in here the this keyword is Jonas, so the Jonas object.
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};
jonas3.calcAge();

// argument keyword
const addExpr = function (a, b) {
  console.log(arguments); //array of arguments
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 6, 8);

const addExprArrow = (a, b) => {
  // console.log(arguments);
  return a + b;
};
addExprArrow(4, 5);

 */

// ******************************************** primitive vs. Objects (Primitive vs. Reference Types)
/* 
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend', friend);
console.log('Me', me);
*/

// ******************************************************* primitive vs. Objects in practice

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'William',
};

const mearriedJessica = jessica;
mearriedJessica.lastName = 'Davis';
console.log('Before mariage:', jessica);
console.log('After marriage:', mearriedJessica);
// mearriedJessica = {} //not allowed due to const

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'William',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

console.log('Before mariage:', jessica2);
console.log('After marriage:', jessicaCopy);

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before mariage:', jessica2);
console.log('After marriage:', jessicaCopy);
