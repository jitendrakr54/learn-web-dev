"use strict";

// LECTURE: Functions
// function describeCountry(country, population, capitalCity) {
//     return `${country} has ${population} people and its capital city is ${capitalCity}`;
// }

// let country1 = describeCountry('India', 1000000000, 'New Delhi');
// let country2 = describeCountry('Pakistan', 5000000, 'Islamabad');
// let country3 = describeCountry('Nepal', 2000000, 'Kathmandu');

// console.log(country1);
// console.log(country2);
// console.log(country3);

// LECTURE: Function Declarations vs. Expressions
const worldPopulation = 790;
function percentageOfWorld1(population) {
    return (population/worldPopulation)*100;
}
// console.log(percentageOfWorld1(1000000000));

// const percentageOfWorld2 = function(population) {
//     return (population/worldPopulation)*100;
// }
// console.log(percentageOfWorld2(1000000000));

// LECTURE: Arrow Functions
// const percentageOfWorld3 = population => (population/worldPopulation)*100;
// console.log(percentageOfWorld3(1000000000));

// const percentageOfWorld4 = (country, population) => {
//     const percentage = (population/worldPopulation)*100;
//     return `${country}'s population is ${percentage} of world's population`;
// }
// console.log(percentageOfWorld4('India', 1000000000));

// LECTURE: Functions Calling Other Functions

// function describePopulation(country, population) {
//     const percentage = percentageOfWorld1(population);
//     return `${country} has ${population} people, which is about ${percentage} of the world`;
// }
// console.log(describePopulation('India', 1000000000));

// LECTURE: Introduction to Arrays
// const populations = [10, 20, 30, 40];
// if (populations.length == 4) {
//     console.log("Array has 4 elements");
// }

// const percentages = [percentageOfWorld1(populations[0]),
//                         percentageOfWorld1(populations[1]),
//                         percentageOfWorld1(populations[2]),
//                         percentageOfWorld1(populations[3])];
// console.log(percentages);

// LECTURE: Basic Array Operations (Methods)
// const neighbours = ['Nepal', 'Pakistan', 'Bangladesh', 'Srilanka'];
// console.log(neighbours);
// neighbours.push('Bhutan');
// console.log(neighbours);
// neighbours.pop();
// console.log(neighbours);

// if (!neighbours.includes('Germany')) {
//     console.log("Probably not a central European country :D");
// }
// neighbours[neighbours.indexOf('Pakistan')] = 'Bhutan';
// console.log(neighbours);

// LECTURE: Introduction to Objects
// const myCountry = {
//     country: "India",
//     cpaital: "New Delhi",
//     language: "Hindi",
//     population: "100M",
//     neighbours: ["Nepal", "Bangladesh", "Srilanka", "Pakistan"],
//     describe: function() {
//         return `${this.country} has ${this.population} people, ${this.neighbours.length} neighbouring country and a capital called ${this.cpaital}`;
//     },
//     checkIsland: function() {
//         this.isIsland = this.neighbours.length ? false : true;
//     }
// }
// console.log(myCountry);

// console.log(myCountry.describe());

// myCountry.population = "102M";
// console.log(myCountry);

// LECTURE: Iteration: The for Loop
// for(let i=1; i<=50; ++i) {
//     console.log("Voter number "+i+" is currently voting");
// }

// LECTURE: Looping Arrays, Breaking and Continuing
// const populations = [10, 20, 30, 40];
// let percentage2 = [];
// for (let i=0; i<populations.length; ++i) {
//     const per = percentageOfWorld1(populations[i]);
//     percentage2.push(per);
// }
// console.log(percentage2);

// LECTURE: Looping Backwards and Loops in Loops
// const listOfNeighbours = [
//     ['Canada', 'Mexico'], 
//     ['Span'], 
//     ['Norway', 'Sweden', 'Russia']];

// for (let i=0; i<listOfNeighbours.length; i++) {
//     for(let j=0; j<listOfNeighbours[i].length; j++) {
//         console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
//     }
// }

// LECTURE: The while Loop
const populations = [10, 20, 30, 40];
const percentage3 = [];

let i = 0;
while ( i < populations.length ) {
    const per = percentageOfWorld1(populations[i]);
    percentage3.push(per);
    i++;
}
console.log(percentage3);
