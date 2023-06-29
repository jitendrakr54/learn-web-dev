# TypeScript Basics & Basic Types

[Official Link - Basic Types](https://www.typescriptlang.org/docs/handbook/basic-types.html)

---

<p style="text-align: center; font-size: 20px; font-weight: bold"> Using Types </p>

## Core Types

- `number`
  - 1, 5.3, -10
  - All numbers, no differentiaton between integers or floats
- `string`
  - 'Hi', "Hi", 'Hi'
  - All text values
- `boolean`
  - true, false
  - Just thesetwo, no "truthy" or "falsy" values

TypeScript does not change the runtime code produced. It super set JS and help prevent problem during development.

TS only helps us during compilation. It doesn't change JavaScript to work differently at runtime, because browsers have
no built-in Typescript support. It can only help us during development, before we compile our Typescript code to
JavaScript, but there, it's extremely useful, because it adds an extra step, an extra sanity check.

---

<p style="text-align: center; font-size: 20px; font-weight: bold"> TypeScript Types vs JavaScript Types </p>

```ts
function add(n1: number, n2: number) {
  return n1 + n2;
}
const number1 = '5';
const number2 = 2.8;
const result = add(number1, number2); // Argument of type '"5"' is not assignable to parameter of type 'number'
console.log(result);
```

≠ between JS and TS, **JS is dynamically typed** (resolved at runtime) and **TS is statically typed** (set during development). TS helps us to fix bugs earlier.

```ts
function add(n1: number, n2: number) {
  // JS way to prevent a bad input to be executed
  if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    // we could avoid it with TS
    throw new Error('Incorrect input');
  }
  return n1 + n2;
}
const number1 = '5';
const number2 = 2.8;
const result = add(number1, number2);
console.log(result);
```

---

<p style="text-align: center; font-size: 20px; font-weight: bold"> Important: Type Casing </p>

In TypeScript, you work with types like `string` or `number`.

**Important**: It is `string` and `number` (etc.), NOT `String`, `Number` (etc.).
**The core primitive types in TypeScript are all lowercase!**

---

<p style="text-align: center; font-size: 20px; font-weight: bold"> Working with Numbers, String & Booleans </p>

Refer app.ts

---

<p style="text-align: center; font-size: 20px; font-weight: bold"> Type Assignment & Type Inference </p>

## Type Inference

TypeScript can **infer** the data type of a variable as we assign values to them. For example, if we assign a value to a `number`, then it **automatically knows that the value is a number** without us telling it explicitly in the code that the variable has the data type number.

```ts
let number3: number; // Good practice to tell TS which value will be stored

let number1 = 5; // Inference, TS detect `number1` store a number
number1 = '1'; // Type '"1"' is not assignable to type 'number'.
```

If you don't initialize variable immediately Then, it's a good practice to tell TypeScript which value will eventually
be stored in there. So that when you later assign a value to it.

```ts
let number1: number;
number = 10;
```

---

<p style="text-align: center; font-size: 20px; font-weight: bold"> QUIZZ </p>

### Understanding Types

##### 1. Why are "Types" useful and offer an advantage compare to vanilla JavaScript?

> Types allow you to detect errors early and avoid some runtime errors

##### 2. Will the following code throw a compilation error?

```ts
let userName: string;
userName = 'Max';
userName = false;
```

> Yes, assigning a boolean to a variable which was assigned a "string" types is not allowed and will yield a compilation error.

##### 3. Does this code rely on type inference?

```ts
const age: number = 29;
```

> Not really - a type is assigned explicitly as well. TypeScript would be able to infer the type (and hence you should omit ":number") but here, we actually also have an explicit type assignment.

##### 4. What's the difference between JavaScript types (e.g. typeof `'Max' => 'string'`) and TypeScript types (e.g. `const name: string = '...'`)?

> TS types are checked during compilation, JS types during runtime. JS has no compilation step but at runtime, you can check for certain types (e.g. in if conditions). TS on the other hand allows you to catch certain errors during development since it checks types during compilation as well.

---

<p style="text-align: center; font-size: 20px; font-weight: bold"> Object Types </p>

```ts
const person1 = {
  name: 'Max',
  age: 30,
};

/**
 * // TS type
 * const person1: {
 *  name: string;
 *  age: number;
 * }
 *
 */

console.log(person1);
console.log(person1.name);
console.log(person1.surname); // Property 'surname' does not exist on type '{ name: string; age: number; }'.

const person2: object = {
  name: 'Max',
  age: 30,
};

const person3: {} = {
  name: 'Max',
  age: 30,
};

/**
 * // TS type
 * const person2: object
 * const person3: object
 *
 */

console.log(person2);
console.log(person2.name); // Property 'name' does not exist on type 'object'.

// GOOD but BETTER to let TS infers the values

const person4: {
  name: string;
  age: number;
} = {
  name: 'Max',
  age: 30,
};

console.log(person4);
```

---

<p style="text-align: center; font-size: 20px; font-weight: bold"> Nested Object & Types </p>

Let's say you have this JavaScript object:

```js
const product = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!',
  },
};
```

This would be the type of such an object:

```ts
{
  id: string;
  price: number;
  tags: string[],
  details: {
    title: string;
    description: string;
  }
}
```

---

<p style="text-align: center; font-size: 20px; font-weight: bold"> Array Types </p>

```ts
let favoriteActivities: string[];
favoriteActivities = 'Sports'; // Type '"Sports"' is not assignable to type 'string[]'
favoriteActivities = ['Sports']; // OK
favoriteActivities = ['Sports', 1]; // Type 'number' is not assignable to type 'string'.
// any[] could be a solution - but you lose all the benefits of TS
```

```ts
const person = {
  name: 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'], // (property) hobbies: string[]
};

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase()); // detect it is a string
  console.log(hobby.map()); // Property 'map' does not exist on type 'string'.
}
```

---

<p style="text-align: center; font-size: 20px; font-weight: bold"> Working with Tuples </p>

Tuples are added by TypeScript = **fixed length array** (AND fixed type).

```ts
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

person.role.push('admin'); // Shouldn't be allowed
person.role[1] = 10; // // Shouldn't be allowed
```

---

<p style="text-align: center; font-size: 20px; font-weight: bold"> Working with Enums </p>

Global constants you might be working with in your app, which you want to represent as numbers, but to which you want to
assign a human readable label. And for that, you have the Enum type.

Enums are added by TypeScript. Automatically **enumerated global constant identifiers**.

```ts
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

/**
 * // COMPILE version (JS)
 *
 * (function (Role) {
 *  Role[Role["ADMIN"] = 0] = "ADMIN";
 *  Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
 *  Role[Role["AUTHOR"] = 2] = "AUTHOR";
 * })(Role || (Role = {}));
 *
 */

const person = {
  name: 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
};

const isPersonAdmin = person.role === Role.ADMIN;
console.log('is person admin: ', isPersonAdmin);
```

```ts
enum Role {
  ADMIN = 6, // 6
  READ_ONLY, // 7
  AUTHOR, // 8
}
```

You also can assign your own values to all these identifiers, if you need your own numbers.

```ts
enum Role {
  ADMIN = 10,
  READ_ONLY = 100,
  AUTHOR = 999,
}
```

You're also not restricted to numbers, you can also go with text here, or even mix it.

```ts
enum Role {
  ADMIN = 'ADMIN',
  READ_ONLY = 100,
  AUTHOR = 'AUTHOR',
}
```

---

<p style="text-align: center; font-size: 20px; font-weight: bold"> The "any" Type </p>

The any type is the most flexible type you can assign in TypeScript. This type doesn't tell TypeScript anything. It
basically means you can store any kind of value in there. We got no specific type assignment.

And this can sound great at fist, but actually it's a big disadvantage and you absolutely want to avoid any whenever
possible. Because any takes away basically all advantages TypeScript gives you. It gives you the same experience you
have with vanilla JavaScript.

```ts
let favoriteActivities: any;
let favoriteActivities: any[];
```

AVOID `any` type.

---

<p style="text-align: center; font-size: 20px; font-weight: bold"> Union Types </p>

```ts
function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine('Max', 'Anna');
console.log(combinedNames);
```

---

<p style="text-align: center; font-size: 20px; font-weight: bold"> Literal Types </p>

Literal types are types where you don't just say that a certain variable or a parameter should hold, let's say a number
or a string, but where you are very clear about the exact value it should hold.

```ts
function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: 'as-number' | 'as-text', // literal type
) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return resultConversion === 'as-number' ? +result : result.toString();
}

const combinedAges = combine(30, 26, 'as-numbe'); // Argument of type '"as-numbe"' is not assignable to parameter of type '"as-number" | "as-text"'.
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);
```

---

<p style="text-align: center; font-size: 20px; font-weight: bold"> Type Aliases & Custom Types </p>

```ts
type Whatever = number; // it works but we should avoid it
type Combinable = number | string; // a new type we're creating based on a union type
type ConversionDescriptor = 'as-number' | 'as-text'; // a new type we're creating based on a literal type

function combine(
  input1: Whatever | string,
  input2: Combinable,
  resultConversion: ConversionDescriptor,
) {
  let result;
  // ...
}
```

Type aliases can be used to **"create" your own types**. You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type. For examples:

```ts
type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 }; // this works!
```

This allows you to **avoid unnecessary repetition** and manage types centrally.

For example, you can simplify this code:

```ts
function greet(user: { name: string; age: number }) {
  console.log('Hi, I am ' + user.name);
}

function isOlder(user: { name: string; age: number }, checkAge: number) {
  return checkAge > user.age;
}
```

To:

```ts
type User = { name: string; age: number };

function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}

function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}
```

---

<p style="text-align: center; font-size: 20px; font-weight: bold"> QUIZZ </p>

#### Core Types & Concepts

##### 1. Which of the following snippets could be simplified by using an enum type?

a)

```ts
const users = ['Max', 'Michael', 'Julie'];
```

b)

```ts
const userA = { name: 'Max' };
const userB = { name: 'Michael' };
```

c)

```ts
const ROLE_ADMIN = 0;
const ROLE_AUTHOR = 1;
```

> c is the answer

##### 2. Will the following code throw a compilation error?

```ts
type User = { name: string; age: number };
const u1: User = ['Max', 29];
```

> Yes! The "User" type clearly wants an object with a "name" and an "age" property. NOT an array.

##### 3. Will this code make it through compilation?

```ts
type Product = { title: string; price: number };
const p1: Product = { title: 'A Book', price: 12.99, isListed: true };
```

> No, `isListed` is not part of the "Product" type.

##### 4. Will this code make it through compilation?

```ts
type User = { name: string } | string;
let u1: User = { name: 'Max' };
u1 = 'Michael';
```

> Yes! This code is fine. The union type allows either an object (with a "name" property) OR a string. You can switch values how often you want.

---

<p style="text-align: center; font-size: 20px; font-weight: bold"> Function Return Types & "void" </p>

The function overall, has one important other type, it has a return type.

```ts
// function add(n1: number, n2: number): number
function add(n1: number, n2: number) {
  return n1 + n2;
}
```

```ts
function add(n1: number, n2: number): number {
  return n1 + n2;
}
```

`void` type = doesn't return anything

```ts
function add(n1: number, n2: number) {
  return n1 + n2;
}

// function printResult(num: number): void
function printResult(num: number) {
  console.log('Result: ' + num);
}

printResult(add(5, 12));
```

In JavaScript, if we use the return value of a function that doesn't return anything, we get undefined as a value. And
as you probably know, undefined in JavaScript is actually a real value.

The difference between void and undefined, that void is the standard which you'll use in pretty much all scenarios where
you have a function that does not return a value, and that you can assign it explicitly.

`undefined` is a valid type in TS (but it is not really useful here)

```ts
let someValue: undefined;
```

---

<p style="text-align: center; font-size: 20px; font-weight: bold"> Functions as Types </p>

```ts
// it is valid but combineValues is any and we want to avoid it
let combineValues;
combineValues = add;
combineValues(5, 12);
combineValues = 5; // Allowed, because combineValues has any type
```

`Function` is a type provided by TypeScript in the end, and this makes it clear that whatever we store in here has to be
a function.

```ts
let combineValues: Function;
combineValues = add;
combineValues(5, 12);
// combineValues = 5; //Not allowed
combineValues = printResult; //Allowed, because printResult is a function
```

It would be good if we could be more precise regarding how the function should look like that we want to store in
'combinevalues.' And that's where function types come in to play.

Function types are types that describe a function regarding the parameters and the return value of that function.
A function type is created with this arrow function notation you know from JavaScript or at least close to that notation.
You don't add curly braces here because we aren't creating an arrow function here, we are creating a function type
instead. Now on the right side of this arrow, you specify the return type of the function you eventually want to be able
to store in here.

```ts
let combineValues: (a: number, b: number) => number;
combineValues = add; // OK
combineValues = printResult; // KO
// (1) Type '(num: number) => void' is not assignable to type '(a: number, b: number) => number'.
// (2) Type 'void' is not assignable to type 'number'.
combineValues(5, 12);
```

---

<p style="text-align: center; font-size: 20px; font-weight: bold"> Functions Types & Callbacks </p>

```ts
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(1, 3, (result) => {
  console.log(result);
});
```

---

<p style="text-align: center; font-size: 20px; font-weight: bold"> QUIZZ </p>

#### Functions & Types

##### 1. Will this code compile?

```ts
function sendRequest(data: string, cb: (response: any) => void) {
  // ... sending a request with "data"
  return cb({ data: 'Hi there!' });
}

sendRequest('Send this!', (response) => {
  console.log(response);
  return true;
});
```

> Yes. Callback functions can return something, even if the argument on which they're passed does NOT expect a returned value.

##### 2. What's the idea behind a "function type"?

> Function types define the parameters and return type of a function.

##### 3. Which code snippet is better (i.e. which code should you write)?

a)

```ts
function sayHi(): void {
  // ...
}
```

b)

```ts
function sayHi(): undefined {
  // ...
}
```

> The answer is a because it doesn't force you to return anything if you don't want to return something

---

<p style="text-align: center; font-size: 20px; font-weight: bold"> The "unknown" Type </p>

Now the interesting thing about the unknown type is we can store any value in there without getting errors, so this is
all allowed.

```ts
let userInput: unknown;
let userName: string;

userInput = 5; // OK
userInput = 'Max'; // OK
userName = userInput; // KO – Type 'unknown' is not assignable to type 'string'.
```

Make it work:

```ts
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
  userName = userInput;
}
```

≠ with `any`:

```ts
let userInput: any; // disable all type checking
let userName: string;

userInput = 5; // OK
userInput = 'Max'; // OK
userName = userInput; // OK
```

Using `unknow` is better than `any` because it keep an extra check / some type checking.

---

<p style="text-align: center; font-size: 20px; font-weight: bold"> The "never" Type </p>

```ts
// Utility function which build error function
function generateError(message: string, code: number): never {
  throw { message, errorCode: code };
  // while(true) {}
}

generateError('An error occured', 500);
```

This function above will never returned any value. Only throw an error.

Another function that would never return, by the way, would be a function with an infinite loop. So if we have while
(true) in there, that creates an infinite loop, and that therefore also would be a function that never returns.
