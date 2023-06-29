// Primitive: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// ***************************************************** Exploring the Base type: Primities

let age: number = 24;
age = 12;

let userName: string;
userName = "Max";

let isInstructor: boolean;
isInstructor = true;

// ***************************************************** Working with Array & Object Types: More complex types

// Array
let hobbies: string[]; // this tells typescript that we want to have array of strings
hobbies = ["Sports", "Cooking"];

let a: any; // this accepts any type of value

// Object
let person: {
  name: string;
  age: number;
}; // this tells typescript that we want to store object which contains name of type string and age of type number

person = {
  name: "Max",
  age: 32,
};

// person = {
//   isEmployee: true, //error
// };

let people: {
  name: string;
  age: number;
}[]; // this tells typescript that we want to store array of objects

// ***************************************************** Understanding Type Inference
let course1 = "React - The Complete Guide";
// course1 = 12341;

// ***************************************************** Using Union Types
let course: string | number = "React - The Complete Guide";
course = 12341;

// ***************************************************** Understanding Type Aliases
type Person = {
  name: string;
  age: number;
};

let person1: Person;

person1 = {
  name: "Max",
  age: 32,
};

let people1: Person[];

// ***************************************************** Functions & Function Types
function add(a: number, b: number) {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

// ***************************************************** Diving Into Generics
/* 
// With any type, typescript will not be able to infer the type, hence if we try to perform some operation on returned value
// which is not allowed then it will fail on runtime, doesn't warn on compile time. For example in this case we are trying
// to perform split on number which is not allowed but it will pass on compile time because type is not known.

function insertAtBegining(array: any[], value: any) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBegining(demoArray, -1);

updatedArray[0].split(" ");
 */

// Solution to above problem is Generics
function insertAtBegining<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBegining(demoArray, -1);
const stringArray = insertAtBegining(["a", "b", "c"], "d");

// updatedArray[0].split(" "); // warn on compile time
let arr: string[];
