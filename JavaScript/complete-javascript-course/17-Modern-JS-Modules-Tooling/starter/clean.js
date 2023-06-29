'strict mode';

// ************************************************* Let's fx some bad code: Part 1 ****************************
// Bad coding example
/* 
var budget = [
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
];

var limits = {
  jonas: 1500,
  matilda: 100,
};

var add = function (value, description, user) {
  if (!user) user = 'jonas';
  user = user.toLowerCase();

  var lim;
  if (limits[user]) {
    lim = limits[user];
  } else {
    lim = 0;
  }

  if (value <= lim) {
    budget.push({ value: -value, description: description, user: user });
  }
};
add(10, 'Pizza 🍕');
add(100, 'Going to movies 🍿', 'Matilda');
add(200, 'Stuff', 'Jay');
console.log(budget);

var check = function () {
  for (var el of budget) {
    var lim;
    if (limits[el.user]) {
      lim = limits[el.user];
    } else {
      lim = 0;
    }

    if (el.value < -lim) {
      el.flag = 'limit';
    }
  }
};
check();

console.log(budget);

var bigExpenses = function (limit) {
  var output = '';
  for (var el of budget) {
    if (el.value <= -limit) {
      output += el.description.slice(-2) + ' / '; // Emojis are 2 chars
    }
  }
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};
*/

// Above bad code is fixed below -
/* 
const budget = [
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
];

const spendingLimits = {
  jonas: 1500,
  matilda: 100,
};

const getLimit = user => spendingLimits?.[user] ?? 0;

const addExpenses = function (value, description, user = 'jonas') {
  user = user.toLowerCase();
  // const limit = spendingLimits[user] ? spendingLimits[user] : 0;
  if (value <= getLimit(user)) {
    // budget.push({ value: -value, description: description, user: user });
    budget.push({ value: -value, description, user }); // if the property name is the same as the variable name
  }
};
addExpenses(10, 'Pizza 🍕');
addExpenses(100, 'Going to movies 🍿', 'Matilda');
addExpenses(200, 'Stuff', 'Jay');

const checkExpenses = function () {
  for (const entry of budget) {
    if (entry.value < -getLimit(entry.user)) {
      entry.flag = 'limit';
    }
  }
};
checkExpenses();

const logBigExpenses = function (bigLimit) {
  let output = '';
  for (const entry of budget) {
    output +=
      entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : '';
  }
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};
console.log(budget);
logBigExpenses(100);
*/

// ************************************************* Functional and declarative principles ****************************

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);
budget[0].value = 1000;
budget[9] = 'Jit';

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});
spendingLimits.jay = 200;
console.log(spendingLimits);

const getLimit = (limits, user) => limits?.[user] ?? 0;

const addExpenses = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  const cleanUser = user.toLowerCase();
  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
};

const newBudget1 = addExpenses(budget, spendingLimits, 10, 'Pizza 🍕');
const newBudget2 = addExpenses(
  newBudget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);
const newBudget3 = addExpenses(budget, spendingLimits, 200, 'Stuff', 'Jay');

const checkExpenses2 = function (state, limits) {
  return state.map(entry => {
    return entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limits' }
      : entry;
  });
  // for (const entry of newBudget3) {
  //   if (entry.value < -getLimit(limits, entry.user)) {
  //     entry.flag = 'limit';
  //   }
  // }
};

const checkExpenses = (state, limits) =>
  state.map(entry =>
    entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limits' }
      : entry
  );

const finalBudget = checkExpenses(newBudget3, spendingLimits);
console.log(finalBudget);

const logBigExpenses = function (state, bigLimit) {
  const bigExpenses = state
    .filter(entry => entry.value <= -bigLimit)
    .map(entry => entry.description.slice(-2))
    .join('/');
  // .reduce((str, cur) => `${str} / ${cur.description.slice(-2)}`, '');
  console.log(bigExpenses);

  // let output = '';
  // for (const entry of budget) {
  //   output +=
  //     entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : '';
  // }
  // output = output.slice(0, -2); // Remove last '/ '
  // console.log(output);
};
// console.log(budget);
logBigExpenses(finalBudget, 100);
