'use strict';

// 3rd enhamcement: compute property name
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// used this in restaurant object : 2nd enhancement
// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // openingHours: openingHours, // before ES6
  openingHours, // ES6 enhanced object literal

  // Before ES6
  // order: function(starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },
  // ES6 feature - new way of writing funtion (no need of function keyword)
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, address, time = '20:00' }) {
    console.log(`order ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
    will be delivered to ${address} by ${time}`);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your pasta with ingredients ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...others) {
    console.log(mainIngredient, others);
  },
};

// ************************************************* Destructuring Arrays
/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

const [first, , , second] = restaurant.categories;
console.log(first, second);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// switching variable without destructuring
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

// switching variable using destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Detructuring on nested arrays
const nested = [2, 3, [5, 6], 8];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// default values
const [a1 = 0, b1 = 0, c1 = 0] = [8, 1];
console.log(a1, b1, c1);
 */

// ************************************************* Destructuring Objects
/*
const { name, openingHours } = restaurant;
console.log(name, openingHours);

// Giving another name to destructured variable
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

// Default value
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables : need to use parenthesis() while destructuring to mutate a and b
let a2 = 111;
let b2 = 254;
const obj = { a2: 4, b2: 6, c2: 8 };
({ a2, b2 } = obj);
console.log(a2, b2);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

// Passing an object to function to avoid passing these separately, and inside funtion these can be destructured.
restaurant.orderDelivery({
  time: '20:30',
  address: 'BTM, Banaglore',
  starterIndex: 2,
  mainIndex: 0,
});

restaurant.orderDelivery({
  address: 'BTM, Banaglore',
  mainIndex: 0,
});
 */

// ************************************************* Spread operator
/* 
const arr = [7, 8, 9];
const badArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

const newArr1 = [1, 2, arr];
console.log(newArr1);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'gnocii'];
console.log(...newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Joint 2 arrays
const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu1);

// Iterables: arrays, strings, maps, sets, NOT Objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} Schmedtmann` );
// Above doesn't work, because  multiple values separated by a comma are usually only expected when we pass arguments
// into a function, or when we build a new array.

const ingredients = [
  // prompt("let's make pasta! Ingredients 1?"),
  // prompt('Ingredients 2?'),
  // prompt('Ingredients 3?'),
];
console.log(ingredients);
restaurant.orderPasta(...ingredients);

// ***** Spread operator on object works starting with ES 2018 ******
const newRestaurant = {
  foundedIn: '1998',
  ...restaurant,
  founder: 'Jitendra',
};
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Punjabi Swag';

console.log(restaurant.name, restaurantCopy.name);
 */

// **************************************************** Rest pattern
/*
const arr1 = [1, 2, ...[3, 4]]; // SPREAD, because on right side of =

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays1 } = restaurant.openingHours;
console.log(weekdays1);

// function
const add = function (...numbers) {
  console.log(numbers);
};
add(2, 3);
add(2, 3, 4);
add(2, 3, 4, 5);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'olives');
restaurant.orderPizza('mushrooms');

const name = 'Jitendra Kumar Gupta';
const [firstName, ...rest] = name.split(' ');
console.log(firstName);
*/

// ***************************************************** Short Circuiting
/*
console.log('---- OR -----');

console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

restaurant.numGuests = 0;
let guests = restaurant.numGuests ? restaurant.numGuests : 10;

// Above is written below using short-circuiting
guests = restaurant.numGuests || 10;
console.log(guests);

console.log('---- AND -----');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

// Above is written below  using short-circuiting
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests || 10;
console.log(guests1);
 */

// ***************************************************** Nullish coalescing operator (??)
/* 
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10; // Used OR to assign default value if first is falsy
console.log(guests);

const guestCorrect = restaurant.numGuests ?? 10; // executes second operand only if first is nullish operator
console.log(guestCorrect);
*/

// ***************************************************** Logical assignment operator
/* 
  const res1 = {
  name: 'Punjabi Dhaba',
  // numGuests: 20,
  numGuests: 0,
};

const res2 = {
  name: 'Bihari Swad',
  owner: 'Babu bhia',
};

res1.numGuests = res1.numGuests || 10;
res2.numGuests = res2.numGuests || 10;

res1.numGuests ||= 10;
res2.numGuests ||= 10;

res1.numGuests ??= 10;
res2.numGuests ??= 10;

res1.owner = res1.owner && '<ANONYMOUS>';
res2.owner = res2.owner && '<ANONYMOUS>';

res1.owner &&= '<ANONYMOUS>';
res2.owner &&= '<ANONYMOUS>';

console.log(res1);
console.log(res2);
*/

// ***************************************************** Looping Arrays: The for-of Loop
/* 
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) {
  console.log(item);
}

for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}

// Using destructuring
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
*/

// ***************************************************** Enhanced Object Literals
// . Refer restaurant object

// ***************************************************** Optional chaining
/* 
console.log(restaurant.openingHours.mon);

if (restaurant.openingHours.mon)
  console.log(
    `Restaurant is opened on Monday at ${restaurant.openingHours.mon.open}`
  );
else console.log('Restaurant is closed on Monday');

// Above can be written in easy way with optional chaining as follows

console.log(restaurant.openingHours.mon.open);
console.log(restaurant.openingHours.mon?.open); // if mon exist then access open, if not exist will return undefined

// We can have multiple optional chainings. Now if restaurant.openingHours does not even exist,
// well, then the Monday property will not even be read and so therefore we don't get that error.

console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  // need to use [] here to access property name, if we use restaurant.openingHours.day then there is no property name as
  //  day in restaurant.openingHours
  console.log(`On ${day}, we open at ${open}`);
}

// method:
console.log(restaurant.order?.(0, 1) ?? 'restaurant does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'restaurant does not exist');

// Arrays:
const users = [
  { name: 'Jitendra', email: 'jitendrakr54@gmail.com' },
  { name: 'Rahul', email: 'rahulkr@gmail.com' },
];
// const users = []; // if array is empty

console.log(users[0]?.name ?? 'User array empty');

// without option chaing we would have to write like this
if (users.length > 0) console.log(users[0].name);
else console.log('User array empty');
*/

//*************************************************** Looping Objects: Object Keys, Values, and Entries
/*
//  Property names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `Restaurant is open ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property values
const values = Object.values(openingHours);
console.log(values);

// Entire Objects
const entries = Object.entries(openingHours);
console.log(entries);

for (const x of entries) {
  console.log(x);
}

//  [key, value]
for (const [day, { open, close }] of entries) {
  console.log(`On ${day}, we open at ${open} and close at ${close}`);
}

// for-in : for in statement loops through the properties of an Object.
const person = { fname: 'John', lname: 'Doe', age: 25 };

let text = '';
for (let x in person) {
  text += person[x];
}
console.log(text);
*/

// ******************************************************* Sets: ES6 feature
// /*
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(orderSet);

console.log(new Set('Pizza'));

console.log(orderSet.size); // Similar to lenth property in array
console.log(orderSet.has('Pizza')); // Similar to inlcude in array
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Risotto'); // Deleting from set is simple but complex in array
console.log(orderSet);
console.log(orderSet[1]); // we cant access like this
// orderSet.clear(); // Delete all element

for (const order of orderSet) {
  console.log(order);
}

// main use case of sets is actually to remove duplicate values of arrays.
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)]; // Create set using staff array, Converts back to array with unique values
console.log(staffUnique);

console.log(new Set(staff).size); // no of different unique staffs

console.log(new Set('jitendrakrgupta').size); // no of unique character
const staffs = new Set(staff);
console.log(staffs);
// */

// ******************************************************* Maps: ES6 feature
/* 
const rest = new Map();
rest.set('name', 'Classico Intaliano'); // take key and value
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

// chaining the map using set() because set returns the updated map
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

// take name of key
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(false));
console.log(rest.get(1));

const time = 18;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
rest.clear();
console.log(rest);
console.log(rest.size);

rest.set([1, 2], 'Test'); //using array as key
console.log(rest);
console.log(rest.get([1, 2])); //undefined

// Above get won't work here because array [1, 2] used while set() and get() is different.
// Here is the workaround solution
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr));

rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
*/

// ******************************************************* Maps: Iteration
/* 
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again!'],
]);
console.log(question);

// Convert Object to Map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz App
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Option ${key}: ${value}`);
}
const answer = Number(prompt('Your answer?'));
console.log(question.get(answer === question.get('correct')));

// convert map to array
console.log([...question]);
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);
*/

// ******************************************************* Working with Strings - Part 1
/* 
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]); //directly on strings

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portual')); // indexOf searches for case sensitive

// Extract from start to end, End value is not included. length of the extracted string is always going to be end minus
// beginning;
console.log(airline.slice(4)); // will start extracting from index 4 till end of string, if last index is not defined.
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// we can even define a negative begin argument. and then it will start counting from the end. Or actually start
// extracting from the end.

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got middle seat');
  } else {
    console.log('You got lucky ');
  }
};

checkMiddleSeat('17B');
checkMiddleSeat('20C');
checkMiddleSeat('10E');
console.log(typeof new String('Jitendra').slice(1));
*/

// ******************************************************* Working with Strings - Part 2
/*
const airline = 'TAP Air Portugal';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// fix capitalization in name
const passenger = 'jItenDra';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// comparing email
const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.io \n';

const normalizedEmail = loginEmail.toLowerCase().trim(); // trims white space
console.log(email === normalizedEmail && 'Correct email');

// replacing
const priceGB = '237,50ē';
const priceUS = priceGB.replace('ē', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passenges come to boarding door 23, Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate')); // g stands for global, all entry of door will be replaced by gate
// console.log(announcement.replaceAll('door', 'gate'));

// boolean
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of new Airbus family');
}

// practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};
checkBaggage('I have a laptop, some Food and a pocket knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
*/

// ******************************************************* Working with Strings - Part 3
/*
console.log('a+very+nice+string'.split('+')); //Returns array
console.log('Jitendra Kumar Gupta'.split(' '));

const [firstName, lastName] = 'Jitendra Gupta'.split(' ');
console.log(firstName, lastName);

const newName = ['Mr.', firstName, lastName.toLowerCase()].join(' '); // Returns string by joing with space
console.log(newName);

const capitalize = function (name) {
  const namesArr = name.split(' ');
  const capitalizedName = [];
  for (const n of namesArr) {
    // capitalizedName.push(n[0].toUpperCase() + n.slice(1));
    capitalizedName.push(n.replace(n[0], n[0].toUpperCase()));
  }
  return capitalizedName.join(' ');
};
console.log(capitalize('jitendra kumar gupta'));

// padding
const message = 'Go to gate number 23';
console.log(message.padStart(25, '+'));
console.log('Jitendra'.padStart(25, '+').padEnd(35, '+'));

const maskCreditCard = function (cardNumber) {
  // const str = cardNumber + '';
  const str = cardNumber.toString();
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(13786372186));
console.log(maskCreditCard(538413786372186));

// Repeat
const message2 = 'Bad weather... All flights delayed... ';
console.log(message2.repeat(4));

const planeInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};
planeInLine(3);
planeInLine(8);
planeInLine(13);
*/

// ******************************************************* String method practice
/*
const getCode = str => str.slice(0, 3).toUpperCase();

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '⛔' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(34);
  console.log(output);
}
console.log(flights.split('+'));
*/

/* const str = 'This is a prcatice of split';
// const str1 = str.split(' ');
const [...str1] = str.split(' ');
console.log(str1); */
