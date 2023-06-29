/* 
const person = {
  name: 'Max',
  age: 30,
};

console.log(person.name);
*/

// ******************************************** Array Types
/* 
const person = {
  name: 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
};

let favouriteActivities: string[];
favouriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase()); // detect it is a string
  // console.log(hobby.map()); // Property 'map' does not exist on type 'string'.
}
*/

// ******************************************** Working with Tuples
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // we need to overwrite the TS inference and a tuple is perfect here
} = {
  name: 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'], // (property) hobbies: string[]
  role: [2, 'author'], // (property) role: (string | number)[]
};

// We want for role only 2 values, the type: number and the type: string

person.role.push('admin'); // Allowed, Push() is exception case
// person.role[1] = 10; // // Shouldn't be allowed
