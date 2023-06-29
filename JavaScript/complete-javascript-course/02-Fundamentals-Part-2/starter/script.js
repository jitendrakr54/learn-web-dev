"use strict";

// **************************************************** Activating strict mode

/* 
let hasDriversLicense = false;
let hasPasstest = true;

if (hasPasstest) hasDriverLicense = false; // will not give any error without strict mode

if (hasPasstest) hasDriversLicense = false;

if (hasDriversLicense) console.log("You can drive...");

const interface = "Audio";
const private = 534; 
*/

// **************************************************** Functions
/*
function logger() {
  console.log("My name is Jonas");
}

// Calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  // console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

// **************************************************** Function declarations vs expressions
/*
// Function declarations
function calcAge1(birthYear) {
  return 2022 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

// Function expressions
const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age2);
*/

// This works
/* 
const age1 = calcAge1(1991);
console.log(age1);

function calcAge1(birthYear) {
  return 2022 - birthYear;
} 

// But this doesn't work
const age2 = calcAge2(1991);
console.log(age2);
const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};
*/

// **************************************************** Arrow Functions
/* 
const calcAge3 = (birthYear) => 2022 - birthYear;

const age3 = calcAge3(1993);
console.log(age3);

const yearsUntilRetirement = (birthYear, firsName) => {
  const age = 2022 - 1993;
  const retirement = 65 - age;
  // return retirement;
  return `${firsName} is retired in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jitendra")); 
*/

// **************************************************** Function calling other functions
/* 
function cutFruiePieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruiePieces(apples);
  const orangePieces = cutFruiePieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
  return juice;
}

console.log(fruitProcessor(2, 3)); 
*/

// **************************************************** Reviewing functions
/* 
const calcAge = function (birthYear) {
  return 2022 - birthYear;
};

const yearsUntilRetirement = (birthYear, firsName) => {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firsName} is retired in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firsName} has already retired 🎉`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1993, "Jitendra"));
console.log(yearsUntilRetirement(1950, "Mike")); 
*/

// **************************************************** CODING CHALLENGE #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works
// differently. Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per
// team). A team only wins if it has at least double the average score of the other team. Otherwise, no team wins

// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores

/* const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// 2. Use the function to calculate the average for both teams

// const avgDolhins = calcAverage(44, 23, 72);
// const avgKoalas = calcAverage(65, 54, 49);

const scoreDolhins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

console.log(scoreDolhins, scoreKoalas);

// 3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and
//    'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule
//     above. Example: "Koalas win (30 vs. 13)"

const checkWinner = function (avgDolhins, avgKoalas) {
  if (avgDolhins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolhins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolhins) {
    console.log(`Kolas win 🏆 (${avgKoalas} vs. ${avgDolhins})`);
  } else {
    console.log("No team wins...");
  }
};

// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and  Data 2
checkWinner(scoreDolhins, scoreKoalas);
 */

// **************************************************** Introduction to Arrays
/* 
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const yy = new Array(1991, 1984, 2008, 2020);
console.log(yy);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay"; // Allowed
console.log(friends);

// friends = ["Bob", "Alice"]; //Not allowed

const firsName = "Jonas";
const jonas = [firsName, "Schemdmann", 2037 - 1991, "teacher", friends];
console.log(jonas);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages); 
*/

// **************************************************** Basic array operations (Methods)
/* const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push("Jay");
console.log(friends, newLength);

friends.unshift("john");
console.log(friends);

const popped = friends.pop();
console.log(friends, popped);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven")); // true
console.log(friends.includes("Bob")); // false
console.log(friends.includes("23")); // false

if (friends.includes("Peter")) {
  console.log("You have a friend called Steven");
}
*/

// **************************************************** Coding Challenge #2
/*
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is
// between 50 and 300, and if the value is different, the tip is 20%

// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated
//    based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the
//    function type you like the most. Test the function using a bill value of 100.

const calcTip = function (bill) {
  //  if (bill >= 50 && bill <= 300) {
  //   return bill * (15 / 100);
  // } else {
  //   return bill * (20 / 100);
  // }

  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

// 2. And now let's use arrays! So create an array 'bills' containing the test data  below
const bills = [125, 555, 44];
console.log(bills);

// 3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
const tips = [
  calcTip(bills[0]),
  calcTip(bills[1]),
  calcTip(bills[bills.length - 1]),
];
console.log(tips);

// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
const total = [
  bills[0] + tips[0],
  bills[1] + tips[1],
  bills[bills.length - 1] + tips[tips.length - 1],
];
console.log(total); 
*/

// **************************************************** Introduction to Objects
/* 
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

const jonas = {
  firstName: "Jonas",
  lastName: "Schemdtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
}; 
*/

// **************************************************** Dot vs. bracket notation
/* 
const jonas = {
  firstName: "Jonas",
  lastName: "Schemdtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas[`first${nameKey}`]);
console.log(jonas[`last${nameKey}`]);

// console.log(jonas.`first${nameKey}`); // this will not work

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
);
// console.log(job.interestedIn); //undefined

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

// Challenge
// Print "Jonas has 3 friends, and his best friend is called 'Michael'
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
); 
*/

// **************************************************** Object Methods
/* 
const jonas = {
  firstName: "Jonas",
  lastName: "Schemdtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  haDriversLicense: false,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // calcAge: function () {
  //   console.log(this);
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummery: function () {
    return `${this.firstName} is a ${this.calcAge()} years old ${
      this.job
    }, and he has ${this.haDriversLicense ? "a" : "no"} driver's license`;
  },
};

// console.log(jonas.calcAge(1991));
// console.log(jonas["calcAge"](1991));

console.log(jonas.calcAge());
// console.log(jonas["calcAge"]());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"
console.log(jonas.getSummery()); */

// **************************************************** CODING CHALLENGE #3
/* 
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations!
// Remember: BMI = mass / height ** 2 = mass (height * height) (mass in kg and height in meter)

// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John
//    Smith)

// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI
//    value to a property, and also return it from the method


const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

// 3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John's
//    BMI (28.3) is higher than Mark's (23.9)!"

mark.calcBMI();
console.log(mark.bmi);

john.calcBMI();
console.log(john.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI(${mark.bmi}) is higher than ${john.fullName}'s BMI(${john.bmi})`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI(${john.bmi}) is higher than ${mark.fullName}'s BMI(${mark.bmi})`
  );
} 
*/

// **************************************************** Iteration: The for loop
/* 
console.log("Lifting weights repetitions 1 🤸‍♂️");
console.log("Lifting weights repetitions 2 🤸‍♂️");
console.log("Lifting weights repetitions 3 🤸‍♂️");
console.log("Lifting weights repetitions 4 🤸‍♂️");
console.log("Lifting weights repetitions 5 🤸‍♂️");
console.log("Lifting weights repetitions 6 🤸‍♂️");
console.log("Lifting weights repetitions 7 🤸‍♂️");
console.log("Lifting weights repetitions 8 🤸‍♂️");
console.log("Lifting weights repetitions 9 🤸‍♂️");
console.log("Lifting weights repetitions 10 🤸‍♂️"); */

// for loop keeps running while condition is true
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetitions ${rep} 🤸‍♂️`);
// }

// **************************************************** Looping arrays, breaking and continuing
/* 
const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];
const types = [];

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);

  // filling types array
  // types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;
  console.log(jonas[i], typeof jonas[i]);
}

console.log("--- BREAK WITH NUMBERS ---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;
  console.log(jonas[i], typeof jonas[i]);
} 
*/

// **************************************************** Looping backward and loops in loops
/*
const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------------- Starting exercise ${exercise}`);

  for (let rep = 0; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repition ${rep}`);
  }
} 
*/

// **************************************************** The while loop
/* 
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetitions ${rep} 🤸‍♂️`);
}

let rep = 1;
while (rep <= 10) {
  console.log(`WHILE: Lifting weights repetitions ${rep} 🤸‍♂️`);
  rep++;
} 
*/

/* 
let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}
*/

// **************************************************** Coding Challenge #4
/* 
// Let's improve Steven's tip calculator even more, this time using loops!

// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
const tips = [];
const totals = [];

// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for
//    every bill value in the bills array. Use a for loop to perform the 10 calculation

const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * (15 / 100);
  } else {
    return bill * (20 / 100);
  }
};

for (let i = 0; i <= bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + calcTip(bills[i]));
}

console.log(bills);
console.log(tips);
console.log(totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage(totals));
console.log(calcAverage(tips)); 
*/
