// *********************************************** Linking to a JavaScript file
/* 
let js = "amazing";
if (js === "amazing") {
  alert("JavaScript is amazing!");
}
console.log(40 + 8 + 23 - 10); 
*/

// *********************************************** Values & variables
/* 
console.log(40 + 8 + 23 - 10);
console.log("Jonas");
console.log(23);

let firstName = "Jonas";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Programmer"; // descriptive
let myCurrentJob = "Tearcher";

let job1 = "Programmer"; // non-descriptive
let job2 = "Tearcher"; */

// ASIGNMENTS: Values and Variables
// 1. Declare variables called 'country', 'continent' and 'population' and assign their values according to your own
//    country (population in millions

/* let country = "India";
let continent = "Asia";
let population = "10 Billion"; */

// 2. Log their values to the console
// console.log(country, continent, population);

// *********************************************** Data Types
/* 
console.log(true); //true
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true); //boolean
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof "jonas");

javaScriptIsFun = "YES!";
console.log(typeof javaScriptIsFun);

// undefined
let year;
console.log(year); // undefined
console.log(typeof year); // undefined

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null); // number
*/

// *********************************************** let, const and var
/* 
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990; // error, can't assigned

var job = "programmer";
job = "teacher"; 
*/

// *********************************************** Basic operators
/* 
const now = 2023;
const ageJit = now - 1993;
const ageKhush = now - 1996;
console.log(ageJit, ageKhush);

console.log(ageJit * 2, ageJit / 10, 2 ** 3);

const firstName = "Jitendra";
const lastName = "Gupta";
console.log(firstName + " " + lastName);

// Assignment operator
let x = 10 + 5;
x += 10; // x = x + 10;
x *= 4;
x++; // x = x + 1
x--;
console.log(x);

// Comparison opeators
console.log(ageJit > ageKhush);
console.log(ageKhush >= 18);

const isFullAge = ageKhush >= 18;

console.log(now - 1991 > now - 1018); 
*/

// *********************************************** Operators precedence
/* 
const now = 2023;
const ageJit = now - 1993;
const ageKhush = now - 1996;
console.log(now - 1991 > now - 1018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJit + ageKhush) / 2;
console.log(averageAge); 
*/

// *********************************************** CODING CHALLENGE #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg  and height in meter)

// Your tasks:
// 1. Store Mark's and John's mass and height in variables

// const massMark = 95;
// const heightMark = 1.88;

// const massJohn = 85;
// const heightJohn = 1.76;

// // 2. Calculate both their BMIs using the formula (you can even implement both versions)

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / heightJohn ** 2;

// // 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(markHigherBMI);

// *********************************************** Strings and template literals
/* 
const firstName = "Jitendra";
const job = "Engineer";
const birthYear = 1993;
const year = 2023;

const jitendra =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jitendra);

const jitendraNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jitendraNew);

console.log(`Just a regular string`);

console.log(
  "String with \n\
multiple \n\
lines"
);

console.log(`String with
multiple
lines`); 
*/

// *********************************************** Taking Decisions: if / else Statements
/* 
const age = 15;
const isOldEnough = age >= 18;

if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young, wait another ${yearsLeft} years`);
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century); 
*/

// *********************************************** CODING CHALLENGE #2
/* // Use the BMI example from Challenge #1, and the code you already wrote, and improve it.

// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher
//    than John's!" or "John's BMI is higher than Mark's!"

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

if (BMIMark > BMIJohn) {
  console.log("Mark's BMI is higher than John's!");
} else {
  console.log("John's BMI is higher than Mark's!");
}

// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's
//    (23.9)!"

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
} 
*/

// *********************************************** Type Conversion and Coercion
/* 
// Type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));

console.log(String(23));

// Type Coercion
console.log("I am" + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" * "2");

let n = "1" + 1;
n = n - 1;
console.log(n); 
*/

// ************************************************* Truthy and Falsy Values
/* 
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;

// here JavaScript will try to coerce any value into a boolean. So, no matter what we put here, if it's not a boolean,
// JavaScript will try to convert it to a boolean.
if (money) {
  console.log("Don't spend it all ;) ");
} else {
  console.log("You should get a job!");
}

let height;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
*/

// ************************************************* Equality Operators: == vs. ===
/* 
const age = 18;
if (age === 18) console.log("You just became an adult (strict)");

if (age == 18) console.log("You just became an adult (loose)");

const favourite = Number(prompt("What's your favourit number?"));
console.log(favourite);

if (favourite === 5) {
  console.log("Cool! 5 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else {
  console.log("Number is not 5 nor 7");
}

if (favourite !== 5) {
  console.log("Why not 5?");
} */

// *************************************************  Boolean Logic: AND, OR & NOT Operators

// ************************************************* Logical Operators
/* 
const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision); // false
console.log(hasDriversLicense || hasGoodVision); // true
console.log(!hasDriversLicense); // false

// const shouldDrive = hasDriversLicense && hasGoodVision;

if (hasDriversLicense && hasGoodVision) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
} 
*/

// ************************************************* Coding Challenge #3
/* 
// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the
// highest average score wins a trophy!

// Your tasks:
// 1. Calculate the average score for each team, using the test data below

// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

// 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't
//   forget that there can be a draw, so test for that as well (draw means they have the same average score)

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy 🏆");
} else if (scoreKoalas > scoreDolphins) {
  console.log("Koalas win the trophy 🏆");
} else if (scoreKoalas === scoreDolphins) {
  console.log("Both win the trophy 🏆");
}

// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher
//    score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test
//    for minimum score, as well as multiple else-if blocks �

const minimumScore = 100;

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy 🏆");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("Koalas win the trophy 🏆");
} else if (scoreKoalas === scoreDolphins) {
  console.log("Both win the trophy 🏆");
}

// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both
//    have a score greater or equal 100 points. Otherwise, no team wins the trophy

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy 🏆");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("Koalas win the trophy 🏆");
} else if (
  scoreKoalas === scoreDolphins &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Both win the trophy 🏆");
} else {
  console.log("No one win the trophy 😟");
} 
*/

// ************************************************* The switch Statement
/* 
const day = "thursday";

switch (day) {
  case "monday": // day === 'monday
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Wrie code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day");
} 
*/

// ************************************************* Statement and Expressions
/* 
// Expressions:
3 + 4;
1991;
true && false && !false;

// Statement
if (23 > 10) {
  const str = "23 is bigger";
} 
*/

// ************************************************* The Conditional(Ternary) Operator

/* 
const age = 15;
age >= 18
  ? console.log("I like to drink wine 🍷")
  : console.log("I like to drink water 💧");

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

// Now we can have conditionals in template literal as we were failed to do so using if-else

console.log(`I like drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);
*/

// ************************************************* Coding Challenge #4
/* 
// Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's
// usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use
//    an if/else statement � (If it's easier for you, you can start with an if/else statement, and then try to convert
//    it to a ternary operator!

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);
console.log(tip);

// 2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: “The
//    bill was 275, the tip was 41.25, and the total value 316.25”

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value was ${
    bill + tip
  }`
); 
*/
