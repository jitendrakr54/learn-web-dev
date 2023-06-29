// exporting module
console.log('Exporting module');

// Blocking code: below code will block the further execution of this module and importing module as well
console.log('Start fetching users');
// await fetch('https://jsonplaceholder.typicode.com/posts');
console.log('Finish fetching users');

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuanity = 23;

// we can also export multiple things, at the same time, using Named Exports.
// export { totalPrice, totalQuanity };
export { totalPrice, totalQuanity as tq };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
