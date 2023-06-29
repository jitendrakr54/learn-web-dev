// LECTURE: Data Types
    // Exercise-1

    // let country = 'India';
    // let continent = 'Asia';
    // let population = 1000000000;

    // console.log("Country: " + country);
    // console.log("Continent: " + continent);
    // console.log("Population: " + population);

    // Exercise-2

    // let country = 'India';
    // let continent = 'Asia';
    // let population = 1000000000;
    // let isIsLand = false;
    // let language;

    // console.log("Country: " + country);
    // console.log("Continent: " + continent);
    // console.log("Population: " + population);
    // console.log("isIsLand: " + isIsLand);
    // console.log("Language: " + language);

// LECTURE: let, const and var
    // const country = 'India';
    // const continent = 'Asia';
    // let population = 1000000000;
    // const isIsLand = false;
    // let language = 'Hindi';
    // // country = 'Hindustan';

    // console.log("Country: " + country);
    // console.log("Continent: " + continent);
    // console.log("Population: " + population);
    // console.log("isIsLand: " + isIsLand);
    // console.log("Language: " + language);

// LECTURE: Basic Operators
    // Exercise 1:
    // let population = 1000000000;
    // let halfPopulation = population/2;

    // console.log("Population after divided by half: " + halfPopulation);

    // Exercise 2:
    // let population = 1000000000;
    // let halfPopulation = population/2;

    // console.log("Population after divided by half: " + halfPopulation);

    // population++;
    // console.log("Population after increasing by 1: " + population);

    // Exercise 3:
    // let population = 1000000000;
    // let populationFinland = 60000000;

    // if (population > populationFinland) {
    //     console.log("My country oppulation is more than Finland");
    // } else {
    //     console.log("My country has less oppulation than Finland");
    // }

    // Exercise 4:
    // let population = 1000000000;
    // let populationAverage = 33000000;

    // if (population > populationAverage) {
    //     console.log("My country oppulation is more than Average population");
    // } else {
    //     console.log("My country has less oppulation than Average population");
    // }

    // Exercise 5:
    // const country = 'India';
    // const continent = 'Asia';
    // let population = 500000000;
    // let language = 'Hindi';
    // console.log(country + " is in " + continent + ", and it's " + population + " people speaks " + language);

// LECTURE: Strings and Template Literals
    // Exercise 6:
//     const country = 'India';
//     const continent = 'Asia';
//     const population = 500000000;
//     const language = 'Hindi';
//     const text = `${country} is in ${continent}, and it's ${population} people speaks ${language}`;
//     console.log(text + "😊");

// // LECTURE: Equality Operators: == vs. ===
//     const numNeighbours = prompt("How many neighbour countries does your country have?");

//     if (Number(numNeighbours) === 1) {
//         console.log('only 1 neighbour');
//     } else if (numNeighbours > 1) {
//         console.log('more than 1 neighbour');
//     } else {
//         console.log('No neighbour');
//     }

// LECTURE: Logical Operators
    // const country = 'India';
    // const population = 1000000000;
    // const language = 'Hindi';
    // const isIsLand = false;

    // if (population < 50000000 && language === 'English' && isIsLand === false) {
    //     console.log("You should live in India");
    // } else {
    //     console.log("India does not meet your criteria");
    // }

// LECTURE: The switch Statement
    // const language = 'hindi';
    // switch(language) {
    //     case 'chinese':
    //     case 'mandarin':
    //         console.log("MOST number of native speakers!");
    //         break;
    //     case 'spanish':
    //         console.log("2nd place in number of native speakers");
    //         break;
    //     case 'english':
    //         console.log("3rd place");
    //         break;
    //     case 'hindi':
    //         console.log("4th most loved language");
    //         break;
    //     case 'arabic':
    //         console.log("5th most spoken language");
    //         break;
    //     default:
    //         console.log("Great language too :D");
    // }

// LECTURE: The Conditional (Ternary) Operator
    const population = 1300000000;
    console.log(`India's population is ${(population>330000000) ? 'above' : 'below'} average`);