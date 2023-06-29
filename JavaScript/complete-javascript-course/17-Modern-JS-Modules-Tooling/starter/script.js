//************************************************* Exporting and importing in ES6 modules *****************************
// Importing module
/* 
import {
  addToCart,
  totalPrice as price,
  // totalQuanity,
  tq,
} from './shoppingCart.js';

console.log('Importing module');
// console.log(shippingCost); // Error: if we use this because shippingCost is scoped to shoppingCart module.

addToCart('bread', 5);
// console.log(totalPrice, totalQuanity);
console.log(price, tq);
*/

/* 
// . we can also import all the exports of a module at the same time
console.log('Importing module');
import * as ShoppingCart from './shoppingCart.js';

ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart.totalPrice);

// import add from './shoppingCart.js';
// add('pizza', 2);

// mixing default and named import
// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(price);

// . imports are a live connection to exports which means if exported value is changed then same will be reflected in
//   importing module.
// . So here we do not see that empty object, that we export, but instead we have cart array with the objects that we
//   just added to the cart, by calling the add function here. And so that proves that this import here, is in fact, not
//   simply a copy of the value, that we exported here.
// . So imports are not copies of the export. They are instead like a live connection.

*/
import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 2);
add('apples', 2);
console.log(cart);

// ************************************************* Top-level await (ES2022) *******************************************
/* 
// top-level await blocks the further code execution
console.log('Start fetching');
const res = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await res.json();
console.log(data);
console.log('Something');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost); // Promise

// Not very clean
lastPost.then(last => console.log(last));

// clean way
const lastPost2 = await getLastPost();
console.log(lastPost2);
*/

// ************************************************** The module pattern ************************************************
/*
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuanity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost}))`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalPrice,
    totalQuanity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
*/

// ************************************************** CommonJS Modules **************************************************
/* 
// Export
export.addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
}

// Import
const {addToCart} = require('./shoppingCart.js');

// . export keyword is basically and object which is not defined here in browser but it is an important object in NodeJs.
*/

// *********************************************** Introduction to NPM  *************************************************

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 3 },
  ],
  user: { loggedIn: true },
};

// const stateClone = Object.assign({}, state);
// state.user.loggedIn = false; // this changes cloned object as well.
// console.log(stateClone);

const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false; // this changes cloned object as well.
console.log(stateDeepClone);

// ******************************************** Bundling with Parcel and NPM Scripts **********************************

////////////////////////// Hot module replacement
// console.log('hell');
// if (module.hot) {
//   module.hot.accept();
// }

// ************************************************ Configuring Babel and Polyfilling ***********************************

class Person {
  greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}
const jonas = new Person('Jitendra');
console.log(jonas);

console.log('Jonas' ?? null);

console.log(cart.find(el => el.quantity >= 2));

Promise.resolve('TEST').then(x => console.log(x));

// ***** Polyfil everything
// import 'core-js/stable';

// ***** Cherry pick which we actually want to pollyfil
import 'core-js/stable/array/find';
import 'core-js/stable/promise';

// ***** Polyfilling async functions
import 'regenerator-runtime/runtime';
