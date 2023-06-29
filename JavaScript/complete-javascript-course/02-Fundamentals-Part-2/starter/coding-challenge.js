"use strict";

// Coding Challenge #1
// const calcAverage = (a, b, c) => (a+b+c)/3;

// const scoreDolphin = calcAverage(85, 54, 41);
// const scoreKolas = calcAverage(23, 34, 27)
// console.log(scoreDolphin, scoreKolas);

// function checkWinner(avgDolphin, avgKolas) {
//     if (avgDolphin >= 2*avgKolas) {
//         console.log(`Dolphin win (${avgDolphin} vs ${avgKolas})`);
//     } else if (avgKolas >= 2*avgDolphin) {
//         console.log(`Kolas win (${avgKolas} vs ${avgDolphin})`);
//     } else {
//         console.log("No one win");
//     }
// }
// checkWinner(scoreDolphin, scoreKolas);

// Coding Challenge #2
const calcTip = bill => (bill >= 50 && bill <= 300) ? bill*0.15 : bill*0.2;
// // console.log(calcTip(100));
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);
// const totals = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]];
// console.log(totals);

// Coding Challenge #3
// const mark = {
//     fullName: "Mark Miller",
//     mass: 78,
//     height: 1.95,
//     calcBMI: function() {
//         this.bmi = this.mass / (this.height**2);
//         return this.bmi;
//     }
// }

// const john = {
//     fullName: "john Smith",
//     mass: 92,
//     height: 1.95,
//     calcBMI: function() {
//         this.bmi = this.mass / (this.height**2);
//         return this.bmi;
//     }
// }
// john.calcBMI();
// mark.calcBMI();
// console.log(`John's BMI(${john.bmi} is ${john.bmi > mark.bmi ? 'higher' : 'lower'} than Mark's(${mark.bmi}))`);

// Coding Challenge #4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = []; const totals = [];

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i]+tips[i]);
}
console.log(bills, tips, totals);

const calcAverage = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    const avg = sum / arr.length;
    return avg;
}
console.log(calcAverage(totals));