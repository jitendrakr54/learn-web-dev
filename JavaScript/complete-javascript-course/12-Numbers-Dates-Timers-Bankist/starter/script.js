'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2022-06-17T14:43:26.374Z',
    '2022-06-18T18:49:59.371Z',
    '2022-06-19T12:01:20.894Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2022-11-01T13:15:33.035Z',
    '2022-11-30T09:48:16.867Z',
    '2022-12-25T06:04:23.907Z',
    '2022-01-25T14:18:46.235Z',
    '2022-02-05T16:33:06.386Z',
    '2022-06-17T14:43:26.374Z',
    '2022-06-18T18:49:59.371Z',
    '2022-06-19T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const formateMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  // console.log(`Date: ${date}`);
  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(`Days passed: ${daysPassed}`);

  let formattedDate = '';
  if (daysPassed === 0) formattedDate = 'Today';
  else if (daysPassed === 1) formattedDate = 'Yesterday';
  else if (daysPassed <= 7) formattedDate = `${daysPassed} days ago`;
  else {
    // const day = `${date.getDate()}`.padStart(2, '0');
    // const month = `${date.getMonth() + 1}`.padStart(2, '0');
    // const years = date.getFullYear();
    // formattedDate = `${day}/${month}/${years}`;
    formattedDate = new Intl.DateTimeFormat(locale).format(date);
  }
  return formattedDate;
};

const formatNumber = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formateMovementDate(date, acc.locale);
    const formattedMov = formatNumber(mov, acc.locale, acc.currency);
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatNumber(
    acc.balance,
    acc.locale,
    acc.currency
  );
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatNumber(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatNumber(
    Math.abs(out),
    acc.locale,
    acc.currency
  );

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatNumber(
    interest,
    acc.locale,
    acc.currency
  );
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

// FAKE ALWAYS LOGGED IN
// currentAccount = account1;
// containerApp.style.opacity = 100;
// updateUI(currentAccount);

const startLogoutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // When 0 seconds, stop timer and log out user
    if (time === 0) {
      containerApp.style.opacity = 0;
      labelWelcome.textContent = 'Log in to get started';
    }
    // Decrease timer by 1 second
    time--;
  };

  // set time to 120s
  let time = 120;
  // call the timer every second
  tick();
  timer = setInterval(tick, 1000);
  return timer;
};

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Create current date and time
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      weekday: 'long',
    };
    // const locale = navigator.language;
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // const day = `${now.getDate()}`.padStart(2, '0');
    // const month = `${now.getMonth() + 1}`.padStart(2, '0');
    // const years = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, '0');
    // const min = now.getMinutes();
    // labelDate.textContent = `${day}/${month}/${years}, ${hour}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Timer
    if (timer) clearInterval(timer);
    timer = startLogoutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // push transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    // Reset timer
    clearInterval(timer);
    timer = startLogoutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      // push loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);
    }, 3000);
  }
  inputLoanAmount.value = '';

  // Reset timer
  clearInterval(timer);
  timer = startLogoutTimer();
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// ************************************************** Converting and Checking numbers **********************************
/* 
// numbers are represented in floting point
console.log(23 === 23.0);
console.log(0.1 + 0.2);
console.log(1 / 10);
console.log(0.1 + 0.2 === 0.3); // false

// Conversion
console.log(Number('23'));
console.log(+'23'); // because when JavaScript sees the plus operator, it will do type coercion.

// Parsing
//  . JavaScript will automatically try to figure out the number that is in this string.
//  . Now, in order to make this work, the string needs to start with a number.
//  . It can be useful in situation, where we get some kind of unit from CSS and then need to get rid of that unit.
//  . Now, the parseInt function actually accepts a second argument, which is the so-called regex. And the regex is the
//    base of the numeral system that we are using.
//  . But if we were working, for example, with binary, then we would write two and then the result would be completely
//    different.

console.log(Number.parseInt('30px')); // 30
console.log(Number.parseInt('e30')); // NaN

console.log(Number.parseInt('30px', 10)); // 30
console.log(Number.parseInt('e30', 10)); // NaN

console.log(Number.parseInt('30px', 8)); //octa

console.log(Number.parseInt('2.5rem'));
console.log(Number.parseFloat('2.5rem'));

// isNaN - check if value is NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20x'));
console.log(Number.isNaN(23 / 0)); // false because result of this expression is Infinity

// isFinite - better way to check if value is number
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20x'));
console.log(Number.isFinite(23 / 0));

console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));
*/

// ************************************************** Math and Rounding **********************************************
/* 
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, '23', 11, 2)); // Does type coercion
console.log(Math.max(5, 18, '23px', 11, 2)); // but doesn't do parsing

console.log(Math.min(5, 18, 23, 11, 2));

console.log(Math.PI * Number.parseFloat('10px') ** 2);

// Math.random()
console.log(Math.trunc(Math.random() * 6) + 1); // Add 1 to get the highest number

const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;
console.log(randomInt(10, 20));

const randomInt2 = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
console.log(randomInt2(10, 20));

// 0...1 -> 0...(max-min) -> min...(max-min + min) -> min...max
//  . It will always give number from 10 to 20 Because this part -> Math.trunc(Math.random() * (max - min) + 1) will
//    always return from 0 to 10 and then + min makes sure that result will be min added. so for example if above
//    expression return 0 then min(10) will be added.

// Rounding numbers: all these methods does type coercion

// trunc: removes decimal part
console.log(Math.trunc(23.3));

// round: It will round to the nearest number
console.log(Math.round(23.3));
console.log(Math.round(23.9));

// ceil: It will round up to the nearest number
console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

// floor: It will round down to the nearest number
console.log(Math.floor(23.3));
console.log(Math.floor('23.9')); // does type coercion

console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

// Rounding decimals
console.log((2.7).toFixed(0)); // returns string
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2));
 */

//************************************************** Remainder operator % **********************************************
/*

console.log(5 % 2);
console.log(5 / 2);

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(434));

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    if (i % 2 === 0) {
      row.style.backgroundColor = 'orange';
    } else if (i % 2 === 1) {
      row.style.backgroundColor = 'yellow';
    }
  });
});
*/

//************************************************** Numeric separator **********************************************
/* 
// 287,460,000,000
const diameter = 287_460_000_000;
console.log(diameter);

const price = 345_99;
console.log(price);

// both are same
const transferFee1 = 15_00;
const transferFee2 = 1_500;

// const PI = 3._1415;
const PI = 3.1415;
console.log(PI);

console.log(Number('230_000')); // NaN -> separator won't work in string
 */

// ************************************************************* BigInt **********************************************
/*
console.log(2 ** 53 - 1); // 9007199254740991 -> This is the biggest number that JavaScript can safely store.
console.log(Number.MAX_SAFE_INTEGER);

console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

console.log(361246375675632576134756846748768);
console.log(361246375675632576134756846748768n);
console.log(BigInt(361246375675632576134756846748768));

// Operations
console.log(10000n + 10000n);
console.log(361246375675632576134756846748768n * 1000000n);
// console.log(Math.sqrt(16n)); // Math operation doesn't work as well

const huge = 7216472365436172363465345n;
const num = 23;
// console.log(huge * num); // Error - Can't do operation between BigInt and number
console.log(huge * BigInt(num));

// Exceptions
console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n == '20');

console.log(huge + ' is REALLY big!!!');

// Divisions
console.log(11n / 3n); // 3n - returns closest big int, remove fractional part
console.log(10 / 3);
*/

// ******************************************************* Dates ***********************************************
/* 
// Creating date - there are 4 ways to create date

// 1. Using default constructor
const now1 = new Date();
console.log(now1);

// 2. Using string
console.log(new Date('Jun 19 2022 16:24:24'));
console.log(new Date('October 1, 1993'));
console.log(new Date(account1.movementsDates[0]));

// 3. By passing date in format
console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 31));

// 4. By passing number of milliseconds - calculated from unix time which is Jan 1, 1970
console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // 3 days after Unix time

// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime()); // returns timestamp - milliseconds from Unix time

console.log(new Date(2142237180000));
console.log(Date.now()); // returns current timestamp

future.setFullYear(2040);
console.log(future);
*/

// ******************************************************* Operations with Dates *************************************
/*
const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24); //sec * min * hr * day

const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 4));
console.log(days1);
*/

// ******************************************************* Internaionalizing Numbers **********************************
/* 
const num = 3884764.23;
const options = {
  // style: 'unit',
  // unit: 'mile-per-hour',
  // unit: 'celsius',

  // style: 'percent',
  style: 'currency',
  currency: 'EUR',
  // useGrouping: false, // Number will be printed without seperator
};

console.log('US:   ', new Intl.NumberFormat('en-US', options).format(num));
console.log('Germany:   ', new Intl.NumberFormat('de-DE', options).format(num));
console.log('Syria:   ', new Intl.NumberFormat('ar-SY', options).format(num));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(num)
);
*/

// ******************************************** SetTimeout() & setInterval() *****************************************
/*
// setTimeout()
setTimeout(() => console.log('Here is your pizza 🍕'), 3000);
console.log('Waiting...');

//  . Passing argument to setTimeout() : parameter is passed to setTimeout() after timers
setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza 🍕 with ${ing1} and ${ing2}`),
  3000,
  'olives',
  'spinach'
);
console.log('Waiting...');

const ingredients = ['olive', 'spinach'];
setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza 🍕 with ${ing1} and ${ing2}`),
  3000,
  ...ingredients
);
console.log('Waiting...');

// Canceliing timer of setTimeout
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza 🍕 with ${ing1} and ${ing2}`),
  3000,
  ...ingredients
);
console.log('Waiting...');

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// setInterval()
setInterval(function () {
  const now = new Date();
  console.log(
    `${now.getHours()}:${now.getMinutes()}:${now
      .getSeconds()
      .toString()
      .padStart(2, '0')}`
  );
}, 1000);
 */
