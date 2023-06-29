"use strict";

/* 
getName();
console.log(x);

var x = 7;

function getName() {
  // console.log(this);
  var y = 2;
  console.log("Namaste JavaScript");
} 
*/

/* var a = 10;
function b() {
  var x = 10;
}

console.log(window.a);
// console.log(x);

let obj = {
  x: 1,
  y: 2,
};

console.log(obj.x);
console.log(obj.z);
 */

// console.log(a);

/* 
function a() {
  var b = 10;
  c();
  function c() {
    console.log(b);
  }
}
a();
*/

/* 
console.log(a);
// console.log(b);

var a = 10;
let b = 20;
var a = 20;

console.log(a); 
*/

/* var a = 10;
let b = 20;
const c = 30;

console.log(a, b, c);
 */

/* let b = 100;
{
  var a = 10;
  let b = 20;
  const c = 30;
}
console.log(b);
 */

/* 
var a = 10;
console.log(window.a);

function test() {
  var b = 20;
  console.log(window.b);
}

test(); 
*/

/* 
setTimeout(function () {
  console.log("timer");
}, 5000);

function x(y) {
  console.log("x");
  y();
}
x(function y() {
  console.log("y");
});
*/

/* 
function attachEventListener() {
  let count = 0;
  document.querySelector(".clickMe").addEventListener("click", function () {
    console.log("clicked!");
    document.querySelector(".counter").textContent = count++;
  });
}

attachEventListener(); 
*/

/* 
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const arrNew = arr
  .map((item) => item * 3)
  .filter((item) => item % 2 === 0)
  .reduce((acc, cur) => acc + cur, 0);
console.log(arrNew);
 */

// [2,1,4,3,2,5]
// [5,2,3,1,2,4]

// function checkIfEqual(arr1, arr2) {}

// Input: madam
/* function checkIfPalindrom(str1) {
  const reversedString = str1.split("").reverse().join("");
  console.log(reversedString, str1);
  if (str1 === reversedString) {
    console.log("String is Palindrom");
  }
}
checkIfPalindrom("hello");

const multiply = function (a, b) {
  return a * b;
};

const multiplyBytwo = multiply.bind(this, 2);
console.log(multiplyBytwo(3));
const multiplyBythree = multiply.bind(this, 5);
console.log(multiplyBythree(3));

let str = "Jitendra";
console.log(typeof str);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = arr1;

arr2.push(6);
console.log(arr1, arr2);
 */

console.log("Hello");

// document
//   .querySelector(".random")
//   .addEventListener("click", function clickHandler() {
//     const randomNum = Math.random();
//     // document.querySelector('.random').textContent = randomNum;
//     // debugger;
//     console.log(randomNum);

//     fetch("https://infra.com");
//     console.log("fetch done");
//   });

/* function test1() {
  console.log("test1", this);
  test2();
}

function test2() {
  console.log("test2", this);
  test3();
}

function test3() {
  console.log("test3", this);
  console.log("Done!");
}
 */

// console.log(1 < 2 < 3);

function x() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  console.log("Namaste Javascript");
}
x();
