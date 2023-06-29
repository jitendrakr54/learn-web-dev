'use strict';

// ************************************************** Default Parameters
/* 
const bookings = [];
const createBoking = function (
  flightNumber,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNumber,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBoking('6E25');
createBoking('6E25', 2);
createBoking('6E25', 2, 190);
createBoking('6E25', undefined, 190); // passing undefined skip a parameter
 */

// ****************************************** How passing arguments works: value vs reference
/* 
const flightNumber = '6E25';
const jit = {
  name: 'Jitendra Kumar Gupta',
  passport: '1312672746285785',
};

const checkIn = function (flightNum, passenger) {
  flightNum = '6E26';
  passenger.name = 'Mr. ' + passenger.name;
  if (passenger.passport === '1312672746285785') {
    alert('CheckedIn');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flightNumber, jit); // copy of flightNumber is passed, reference of jit is passed
console.log(flightNumber, jit);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000000);
};

newPassport(jit);
checkIn(flightNumber, jit);
*/

// ****************************************** First-class and Higher-order functions
/* 
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...other] = str.split(' ');
  return [first.toUpperCase(), ...other].join(' ');
};

// Here transformer is Higher order function and fn is callback function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Converted by: ${fn.name}`);
};
transformer('JavaScript is the best', upperFirstWord);

// JS uses callback all the time
const high5 = function () {
  console.log('✋🏾');
};

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);
*/

// *********************************************** Functions returning functions
/* 
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeter = greet('Hey');
greeter('Jitendra');
greeter('Rahul');
greet('Hi')('John');

greet('Hello')('Jonas');

// Challenge: Using arrow function
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Jonas');
*/

// *********************************************** The call and apply methods
/* 
const luftansha = {
  airline: 'Luftansha',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

luftansha.book(239, 'Jitendra');
luftansha.book(598, 'Rahul');
console.log(luftansha);

// After some time luftansha created new airline, now we want to create book method for eurowings as well, but simply
// copying would not be appropriate.
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

// So now we are simply assigning book method from luftansha to another book variable, since method is just a value.
const book = luftansha.book;

// this call doesn't work because now this is a regular function call and inside book, this will point to undefined.
// hence we get error.
// book(23, 'Prince');

// . Now book function will not have access of 'this' because in book function this points to undefined in strict mode
//   But now how do we actually fix this problem? So in other words, how do we tell JavaScript that we want to create a
//   booking on the new Eurowings airline? Or even how do we tell it that we want to book on Lufthansa here?

//   Well, basically, we need to tell JavaScript explicitly what the this keyword here should be like. So if we want to
//   book a Lufthansa flight, the this keyword should point to Lufthansa but if we want to book a Eurowings flight, then
//   the this keyword should point to Eurowings.

//   So how do we do that? How do we tell JavaScript explicitly or manually what this keyword should look like?
//   Well, there are three function methods to do that and they are call, apply and bind.

book.call(eurowings, 23, 'Prince');
book.call(eurowings, 45, 'Nilesh');
console.log(eurowings);

book.call(luftansha, 12, 'Hari');
console.log(luftansha);

const swiss = {
  airline: 'Swis Airlines',
  iataCode: 'LX',
  bookings: [],
};
book.call(swiss, 19, 'Nur');

// apply() method
const flightData = [583, 'Hiten'];
book.apply(swiss, flightData);

// . apply method is not that used anymore in modern JavaScript because now, we actually have a better way of doing
//   the exact same thing - spread operator in call() method

const flightData1 = [123, 'George'];
book.call(swiss, ...flightData1);
console.log(swiss);
*/

// *********************************************** The bind methods
/* 
// . this will not call the book function. Instead it will return a new function where this keyword will always be set
//   to Eurowings.
const bookEW = book.bind(eurowings);
const bookLM = book.bind(luftansha);
const bookLX = book.bind(swiss);

//  Now this now looks like the normal book function call again. And that's because this function here already has the
//  this keyword set in stone basically.
bookEW(15, 'James');

// now instead of having to use a call all the time, we can just do bind once. It's lot more easier.
const bookEW23 = book.bind(eurowings, 23); // now bind is specific for flight 23
bookEW23('Jitendra');
bookEW23('Rahul');

// . Basically specifying parts of the argument beforehand, is actually a common pattern called partial application.
//   So essentially, partial application means that a part of the arguments of the original function are already applied,
//   so which means, already set. And so that's exactly what the bookEW23 function is, right? It's essentially the book
//   function but with 23 already predefined.

//  . bind() could be useful with event listener
luftansha.planes = 300;
luftansha.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// . Here if we are attaching this buyPlane function to event listener, so inside this function this will point to html
//   element(button in this case) on which event listener is attached(see console log of this). So to increase number of
//   planes, we need to bind this to luftansha as below-
document
  .querySelector('.buy')
  .addEventListener('click', luftansha.buyPlane.bind(luftansha));

// Partial application: Partial application means that we can preset parameters.

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVat = addTax.bind(null, 0.23); //presetting rate here so rate will be always 23%
// addVat = value => value + value*0.23; // Above is same as writing like this

//  this is actually different from default parameter, because this here is creating a brand new, simply, more specific
//  function based on a more general function, which is the addTax function.

console.log(addVat(200));
console.log(addVat(300));

// . Above is done using Function returning a function
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVat2 = addTaxRate(0.6);
console.log(addVat2(50));
*/

// ******************************************************* Coding Challenge #1
/* 
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // console.log(this);
    const str = `${this.question}\n${this.options.join(
      '\n'
    )}\n(Write option number)`;
    const option = Number(prompt(str));
    // if (typeof option === 'number' && option < this.answers.length) {
    //   this.answers[option]++;
    // }
    // using short circuiting
    typeof option === 'number' &&
      option < this.answers.length &&
      this.answers[option]++;

    // Display result
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are: ${this.answers.join(',')}`);
    } else {
      console.log('not a valid type');
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
*/

// *********************************************** Immediately invoked function expression (IIFE)
/* 
const runOnce = function () {
  console.log('This will never run again!');
};
runOnce();

//  . However, we can actually run this function again at some other point in the code, if we want it to.
//    There's nothing stopping us, from later doing run once again. and so this is not what we want to do.
//    We want to actually execute a function immediately. and not even having to save it somewhere.

//  . So we simply write the function expression itself, without assigning it to any variable.
//    Now we simly wrap all of this into parentheses and then immediately call it.

(function () {
  console.log('This will never run again!');
  const isPrivate = 23; //not accessible from outside
})();

// using arrow function
(() => console.log('This will never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
// console.log(isPrivate);
console.log(notPrivate);
*/

// **************************************************** Closure
/* 
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

// Even though execution context of secureBooking() is popped off from stack, booker is still able to access
// passengerCount and this happens due to closure

console.dir(booker);
*/

// **************************************************** More Closure examples

// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f(); // So here, f function is closed over the variable environment of g
console.dir(f);

// Re-assigning f function
h();
f(); // So here, f function is closed over the variable environment of h
console.dir(f);

// Example 2
// . callback function here was executed completely independently from the board passengers function.
//   But still the callback function was able to use all the variables that were in the variable environment in which
//   it was created. So that's n and perGroup. And one more time, this is a clear sign of a closure being created

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`Will start boaring in ${wait} seconds`);
};
boardPassengers(180, 3);

// **************************************************** CODING CHALLENGE #2
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
