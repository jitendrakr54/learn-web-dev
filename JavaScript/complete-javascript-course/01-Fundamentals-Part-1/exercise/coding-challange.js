// Coding Challenge #1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// console.log("BMI Mark: " + BMIMark + " BMI John: " + BMIJohn);
// // let markHeigherBMI = (BMIMark > BMIJohn) ? true : false;
// let markHeigherBMI = BMIMark > BMIJohn;



// Coding Challenge #2

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// // if (markHeigherBMI) {
// //     console.log("Mark's BMI is higher than John's!");
// // } else {
// //     console.log("John's BMI is higher than Mark's!");
// // }

// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI(${BMIMark}) is higher than John's(${BMIJohn})!`);
// } else {
//     console.log(`John's BMI(${BMIJohn}) is higher than Mark's(${BMIMark})!`);
// }


// // Coding Challenge #3

// const dolphinScore1 = 97;
// const dolphinScore2 = 112;
// const dolphinScore3 = 101;

// const kolasScore1 = 109;
// const kolasScore2 = 95;
// const kolasScore3 = 123;

// const avgDolphin = (dolphinScore1+dolphinScore2+dolphinScore3) / 3;
// const avgKolas = (kolasScore1+kolasScore2+kolasScore3)/3;

// console.log("Dolphin Score: "+ avgDolphin + " Kolas Score: "+ avgKolas);
// if (avgDolphin >= 100 || avgKolas >= 100) {
//     if (avgDolphin === avgKolas) {
//         console.log("Both won the trophy");
//     } else if (avgDolphin > avgKolas) {
//         console.log("Dolphin wins");
//     } else {
//         console.log("Kolas wins");
//     }
// } else {
//     console.log("No team won");
// }

// Coding Challenge #4

const bill = 40;
const tip = (bill >= 50 && bill <= 300) ? (bill * 15 / 100) : (bill * 20 / 100);
console.log(`Tip is ${tip}`);
console.log(`The bill was ${bill}, the tip was ${tip} and the total value is ${bill + tip}`);