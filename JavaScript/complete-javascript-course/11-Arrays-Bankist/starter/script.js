'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  // slice() creates copy of movements and allow method chaining
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__date"></div>
      <div class="movements__value">${mov}€</div>
    </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
// displayMovements(account1.movements);

const calcDispBalance = function (account) {
  account.balance = account.movements.reduce((acc, mov) => acc + mov);
  labelBalance.textContent = `${account.balance} €`;
};
// calcDispBalance(account1.movements);

const calcDispSummary = function (acc) {
  const income = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => (acc += mov));
  labelSumIn.textContent = `${income}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => (acc += mov));
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => (acc += int), 0);
  labelSumInterest.textContent = `${interest}€`;
};
// calcDispSummary(account1.movements);

const updateUI = function (account) {
  //Display movements
  displayMovements(account.movements);

  // Display balance
  calcDispBalance(account);

  // Display summary
  calcDispSummary(account);
};

const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUserNames(accounts);
// console.log(accounts);

// Event handler for login feature
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  // Prevent form to get submitted
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and welcome message
    containerApp.style.opacity = 100;
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split()[0]
    }`;
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  } else {
    console.log('Invalid credential');
  }
});

// Event handler for Transfer money
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('Transfer amount');
  const amount = Number(inputTransferAmount.value);
  const reciverAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  console.log(amount, reciverAccount);
  if (
    amount > 0 &&
    amount <= currentAccount.balance &&
    reciverAccount &&
    reciverAccount?.username !== currentAccount.username
  ) {
    console.log('Transfer Valid!');
    // Doing transfer
    currentAccount.movements.push(-amount);
    reciverAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  } else {
    console.log('Transfer Invalid!');
  }
});

// Event handler for Close account feature - usecase of findIndex()
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('Close account');
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    // Delete account
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    accounts.splice(index, 1);

    // Disable UI (Logout)
    containerApp.style.opacity = 0;
    labelWelcome.textContent = 'Log in to get started';
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

// Event handler for Request loan - usecase of some()
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  inputLoanAmount.value = '';
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

// Event handler for sort - usecase of sort()
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// **************************************************** Simple array methods *****************************************
/*

// . SLICE
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice()); // shallow copy
console.log([...arr]); // We can use spread operator or slice(), but slice() helpful in method chaining

//  SPLICE
console.log(arr.splice(2)); // it will return extracted array and original array is left only wih [a,b]
console.log(arr);

arr.splice(-1);
console.log(arr);

arr.splice(1, 2); // first param is starting index and second is number of element to splice
console.log(arr);

// Another usecase of splice: adding to array
const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits.splice(2, 0, 'Lemon', 'Kiwi');
console.log(fruits);

const fruits1 = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits.splice(2, 2, 'Lemon', 'Kiwi');
console.log(fruits1);

// REVERSE
let arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
arr = ['a', 'b', 'c', 'd', 'e'];
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join('-'));
*/
//************************************************ The new at Methods ************************************************
/*
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// Getting last element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('Jitendra'.at(-1));
*/

//************************************************ Looping Arrays: forEach ********************************************
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${movement}`);
  }
}

console.log('-------forEach()----------');

movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${movement}`);
  }
});

// Accessing counters in forEach()

// In for of we can access counter using entries() method
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${movement}`);
  }
}

movements.forEach(function (movement, i, array) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${movement}`);
  }
});
*/

//*********************************************** forEach() on map and set *******************************************
/* 
// MAP
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// SET
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, set) {
  console.log(`${value}: ${value}`);
});

const test = function (movements) {
  console.log('test function');
  const a = 10;
  movements.forEach(function (movement) {
    console.log(a);
  });
};
test(movements);
*/

//*********************************************** CODING CHALLENGES #1 ***********************************************
/* 
const checkDogs = function (dogsJulia, dogsKate) {
  const correctedData = [...dogsJulia.slice(1, -2), ...dogsKate];
  correctedData.forEach(function (data, i) {
    const ageType = data >= 3 ? 'is an adult' : 'still a puppy';
    console.log(`Dog number ${i + 1} ${ageType}, and is ${data} years old`);
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
*/

//********************************************************** MAP *****************************************************
/* 
const curToUSD = 1.1;
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const movementInUSD = movements.map(function (mov) {
  return mov * curToUSD;
});

// Using arrow function
const movementInUSDArr = movements.map(mov => mov * curToUSD);

console.log(movements);
console.log(movementInUSD);

const movementInUSDFor = [];
for (const movement of movements) {
  movementInUSDFor.push(movement * curToUSD);
}

const movementDiscriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementDiscriptions);
*/

//*********************************************************** FILTER *************************************************
/* 
const deposits = movements.filter(function (mov) {
  return mov > 0;
});

const withdrawals = movements.filter(mov => mov < 0);

console.log(movements);
console.log(deposits);
console.log(withdrawals);
*/

//************************************************************ REDUCE *************************************************
/* 
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);
console.log(balance);

const balanceArr = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balanceArr);

// Maximum value
const maxValue = movements.reduce(
  (acc, cur) => (cur > acc ? cur : acc),
  movements[0]
);
console.log(maxValue);
*/

//********************************************* CODING CHALLENGES #2 *************************************************
/* 
const calcAverageHumanAge = function (dogAges) {
  const humanAges = dogAges.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  console.log(humanAges);
  const adults = humanAges.filter(age => age >= 18);
  console.log(adults);
  // const average = adults.reduce((acc, value) => acc + value, 0) / adults.length;

  // Another way of calculating average
  // 2 3, (2+3)/2 = 2.5 === 2/2+3/2 = 2.5
  const average = adults.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );
  return average;
};
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
*/

//********************************************* Magic of chaining methods *********************************************
/* 
const totalDepositInUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    console.log(arr);
    return mov * curToUSD;
  })
  // .map(mov => mov* curToUSD)
  .reduce((acc, mov) => (acc += mov), 0);
totalDepositInUSD;
console.log(totalDepositInUSD);
*/

//********************************************* CODING CHALLENGES #3 *************************************************
/*
// Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time as an arrow function, and using chaining!
// Test data:
//    Data 1: [5, 2, 4, 1, 15, 8, 3]
//    Data 2: [16, 6, 10, 5, 6, 1, 4]

const calcAverageHumanAge1 = dogAges => {
  const averageAge = dogAges
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  console.log(averageAge);
  return averageAge;
};
const avg1 = calcAverageHumanAge1([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge1([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
*/

// *************************************************** find() method ************************************************
/* 
const firstWithdrwal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrwal);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);
*/

// ************************************************ findIndex() method ***********************************************

// ************************************************ some and every method ********************************************
/*
console.log(movements);
console.log(movements.includes(-130));

// some
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);
const aboveSomeNumbers = movements.some(mov => mov > 1500);
console.log(aboveSomeNumbers);

// every()
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
*/

// ************************************************ flat and flatmap ************************************************
/* 
const arr1 = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr1);

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2)); //level of flat

// flat
const overallBalance = accounts
  .map(acc => acc.movements) // create a new array of all the movements from all accounts.
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

// flatMap() - It does 2 operation (flat and map) at once but only flaten at one nested level
const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);
*/

// ****************************************************** Sorting ************************************************
/* 
// Strings
const owners = ['Jona', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners); // mutates

// Numbers
console.log(movements);
console.log(movements.sort());

// . return < 0 => A, B (keep order)
// . return > 0 => B, A (switch order)

// Ascending
movements.sort((a, b) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
});
movements.sort((a, b) => a - b); // if working with number, we can simplify like this
console.log(movements);

// descending
movements.sort((a, b) => {
  if (a > b) {
    return -1;
  }
  if (a < b) {
    return 1;
  }
});

movements.sort((a, b) => b - a);
console.log(movements);
*/

// ********************************************** fill(), Array.from() ***********************************************
/* 
// Till now we were creating array like below
const arr4 = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7); // creates an array with length 7 with empty element
console.log(x);

// how do we add element inside this
// Empty arrays + fill method
console.log(x.map(() => 5)); // map doesn't work on empty array
// x.fill(1); // fills entire aarray with 1
// x.fill(1, 3); // 2nd parameter is where to start fill
x.fill(1, 3, 5); // 3rd param is till where to fill
console.log(x);

arr4.fill(23, 2, 6); // fill also works on already filled array
console.log(arr4);

// How do we create an array programatically
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (curr, i) => i + 1);
console.log(z);
// As we are not using first param in callback(curr), we can throw away using underscore(_)
const zz = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(zz);

// Array.from() was originally created to form an array using existing iterable items like - sets, amps, string

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);
  // Another way using spread operator but mapping should be done separately
  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
  console.log(movementsUI2);
});
*/

// *************************************************** Array methods practice ******************************************
/* 
// 1. Calculate total number of deposits in bank account
const banckDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, curr) => sum + curr, 0);
console.log(banckDepositSum);

// 2. how many deposits there have been in bankwith at least $1000
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;
// console.log(numDeposits1000);

// Another solution for above problem
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  // .reduce((count, curr) => (curr >= 1000 ? count + 1 : count), 0);
  // .reduce((count, curr) => (curr >= 1000 ? count++ : count), 0); // wont work because of post increment
  .reduce((count, curr) => (curr >= 1000 ? ++count : count), 0);
console.log(numDeposits1000);

// postincrement increment the value but still return previous value

// 3. create an object which contains some of deposits and withdrawl using reduce
const { bankDeposits, bankWithdrawls } = accounts
  // const sum = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.bankDeposits += cur) : (sums.bankWithdrawls += cur);
      sums[cur > 0 ? 'bankDeposits' : 'bankWithdrawls'] += cur;
      return sums;
    },
    { bankDeposits: 0, bankWithdrawls: 0 }
  );
// console.log(sum);
console.log(bankDeposits, bankWithdrawls);

// 4. this is a nice title => This Is a Nice Title
const convertTitleCase = function (title) {
  const exception = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exception.includes(word) ? word : capitalize(word)))
    .join(' ');
  return capitalize(titleCase);
};
console.log(convertTitleCase('this is a nice and title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
 */
////////////////////////////////////////////////////
// Coding Challenge #4
/* 
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.forEach(
  dog => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
);
console.log(dogs);

// 2.
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(
  `Sarah's dog is eating ${
    dogSarah.curFood > dogSarah.recommendedFood ? 'too much' : 'too little'
  }`
);

// 3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .flatMap(dog => dog.owners);
// .flat();
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .flatMap(dog => dog.owners);
// .flat();
console.log(ownersEatTooLittle);

// 4.
console.log(`${ownersEatTooMuch.join(' and ')}'s dog eating too much`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dog eating too little`);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

// 6.
const checkEatingOkay = dog =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1;

console.log(dogs.some(dog => checkEatingOkay(dog)));

// 7.
const dogOkFood = dogs.filter(checkEatingOkay);
console.log(dogOkFood);

// 8.
const dogSorted = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogSorted);
 */
