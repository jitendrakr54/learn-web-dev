/* 
const age = 10;

const person = {
  name: "Jitendra",
  age,
};

console.log(person);

const personArr = [
  { name: "Jitendra", age: 29, job: "IT" },
  { name: "Rahul", age: 29, job: "Govt" },
  { name: "Khushboo", age: 29, job: "IT" },
];

console.log(personArr);

const id = 0;

const idGenerator = (function () {
  let id = 0;
  return function () {
    return (id += 1);
  };
})();

const idGeneratorArr = (() => {
  let id = 0;
  return () => (id += 1);
})();

const newArr = personArr.map((data) => {
  // return { id, ...data };
  return { id: idGeneratorArr(), ...data };
});

console.log(newArr);

const arr = [1, 2, 3];
function addElementToAray(arr, element) {
  return [...arr, element];
}

console.log(addElementToAray(arr, 4));
console.log(addElementToAray(arr, 4));
 */
// ****************************************************** Debouncing & Throttling **************************************

let counter = 0;
const getData = function () {
  console.log("Fetching data...", ++counter);
};

//will return debounced version of getData()
const debounce = function (fn, delay) {
  console.log(this);
  let timer;
  return function () {
    console.log(this);
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, delay);
  };
};

const throttle = function (fn, delay) {
  let flag = true;
  return function () {
    if (flag) {
      fn();
      flag = false;
      setTimeout(() => (flag = true), delay);
    }
  };
};

// const betterFunction = debounce(getData, 300);

const betterFunction = throttle(getData, delay);

// ******************************************************* Understanding this *****************************************

const inputHandler = function (event) {
  console.log(this, event.target.value);
};

document.querySelector(".input1").addEventListener("input", inputHandler);

// ************************************************************** Pure function ****************************************

// Impure Function:
const arr = [1, 2, 3];
function addElementToAray(element) {
  arr.push(element);
}

// Converting above to pure function:

// But it has side effect because it is changing global array arr.
function addElementToAray(arr, element) {
  arr.push(element);
}

// Now this is pure function because it doesn't have any side effect, it doesn't change the input.
function addElementToAray(arr, element) {
  return [...arr, element];
}

console.log(addElementToAray(arr, 4)); // [1, 2, 3, 4]; //it always returns same out for same input.
console.log(addElementToAray(arr, 4)); // [1, 2, 3, 4];
