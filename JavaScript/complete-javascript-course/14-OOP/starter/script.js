'use strict';

// ************************************************ Constructor Functions and the new operator ************************
/*
const Person = function (firstName, birthYear) {
  console.log(this);

  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never use this -
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const jonas = new Person('Jitendra', 1993);
console.log(jonas);
const matilda = new Person('Matilda', 1996);
const jack = new Person('Jack', 1995);

console.log(jonas instanceof Person);
console.log(jack instanceof Person);

Person.hey = function () {
  console.log('Hey there 🙋‍♂️');
  console.log(this); // this points to entire constructor function because hey is called by Person
};
Person.hey();

// *********************************************** Prototypes *********************************************************

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

jonas.calcAge();
jack.calcAge();

// . But how and why does this actually work? Well, it works because any object always has access to the methods and
//   properties from its prototype. And the prototype of Jonas and Matilda is Person.prototype.
// . And we can actually confirm that because each object has a special property called a underscore underscore proto.
//   So prototype of the Jonas object is essentially the prototype property of the constructor function.

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

// . Person.prototype is not a prototype of Person but it's a prototype of it's object. It can be confirmed as below -

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(jack));
console.log(Person.prototype.isPrototypeOf(Person));

// setting properties using prototype
Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, jack.species);

// ******************************************** Prototypal Inheritance and the prototype chain *************************

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

// ******************************************** Prototypal Inheritance on built-in Objects ****************************

console.log(jonas.__proto__);
// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [1, 2, 6, 4, 2, 6]; // new Array() is same as []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

// . Arrry.prototype.filter() - Why is this?
// . that is because this filter method, does of course, live in the prototype property of the Array constructor.

// We can use protype chain to add method directly to Array.prototype
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);
console.dir(x => x + 1);
*/

//////////////////////////////////////////////
//////// CODING CHALLENGES #1
/* 
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is goint at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is goint at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
const mercedes = new Car('Mercedes', 95);
mercedes.accelerate();
mercedes.brake();
*/

//*********************************************** ES6 classes ****************************************************
/*
// class expression
// const PersonCl = class {}

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  // instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }
  set fullName(name) {
    // console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }
  get fullName() {
    return this._fullName;
  }

  // static method
  static hey() {
    console.log('Hey there 🙋‍♂️');
    console.log(this); // this points to entire constructor function because hey is called by Person
  }
}

const jessica = new PersonCl('Jessica Devis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.fullName);
console.log(jessica.age);
console.log(jessica.__proto__ === PersonCl.prototype);
PersonCl.hey();

// same as adding method in class
// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

const walter = new PersonCl('walter white', 1985);
 */

// ************************************************** getters and setters ******************************************
/*
const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);

*/

// ****************************************************** static methods ***********************************************

// console.log(Array.from(document.querySelectorAll('h1')));

// ****************************************************  Object.create() ***********************************************
/* 
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    // this has nothing to do with constructor function
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

// . With Object.create, here we pass in the object that we want to be the prototype of the new object.
//   So that's PersonProto. And so this will now return a brand new object, that is linked to the prototype that we
//   passed in here. So Steven here is right now an empty object. And it will be linked to this PersonProto object,
//   which will be its prototype.

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();
console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
*/

//////////////////////////////////////////
//////////////// CODING CHANLLENGE #2
/* 
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is goint at ${this.speed} km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is goint at ${this.speed} km/h`);
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
  get speedUS() {
    return this.speed / 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);
*/

// ***************************************** Inheritance between "Classes": Constructor Function ***********************
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  //   this.firstName = firstName;
  //   this.birthYear = birthYear;
  Person.call(this, firstName, birthYear); // calling the function and setting this keyword using call()
  this.course = course;
};

// linking prototype
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 1999, 'Computer Science');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
*/

///////////////////////////////////////////
//// CODING CHALLENGE #3
/* 
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}`);
};
Car.prototype.brake = function () {
  this.speed -= 10;
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
// Polymorphism - overriding
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge} %`
  );
};

const tesla = new EV('Tesla', 120, 20);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();
*/

// *********************************************** Inheritance between "Classes": ES6 Classes ***********************
/*
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

// class StudenCl extends PersonCl {}
// const martha = new StudenCl('Martha Jonas', 2012, 'Computer Science');

class StudenCl extends PersonCl {
  constructor(name, birthYear, course) {
    super(name, birthYear); // Always needs to be happen first
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this._fullName} and I study ${this.course}`);
  }

  //overriding, methd shadowing
  calcAge() {
    console.log(
      `I'm ${
        2022 - this.birthYear
      } years old, but as a student I feel more like ${
        2022 - this.birthYear + 10
      }`
    );
  }
}
// const martha = new StudenCl('Martha Jonas', 2012, 'Computer Science');
// martha.introduce();
// martha.calcAge();

let jit = new PersonCl('Jitendra Kumar', 1993);
jit = new StudenCl('Martha Jonas', 2012, 'Computer Science');
jit.introduce();
*/

// *********************************************** Inheritance between "Classes": Object.create **********************
/* 
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    // this has nothing to do with constructor function
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jit = Object.create(StudentProto);
jit.init('jit', 2010, 'Computer Science');
jit.introduce();
jit.calcAge();
*/

//**************************************************** Another Class example ****************************************
/* 
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;
    console.log(`Thanks for opening an account, ${owner}`);
  }

  deposit(val) {
    this.movements.push(val);
  }
  withdrawal(val) {
    this.deposit(-val);
  }
  approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log('Congratulations! Loan approved');
    }
  }
}

const acc = new Account('Jonas', 'EUR', 1111);

// not a good idea to use property directly, instead create method and use them, these type of property should be hidden
// from user to manipulate directly
acc.movements.push(250);
acc.movements.push(-140);

// - is hidden from user as user doesn't care about -, he just want to withdraw some amount, and - operation should be
// taken care by class
acc.deposit(250);
acc.withdrawal(140);

acc.requestLoan(1000);
acc.approveLoan(100); // Doesn't make sense to call this, should be hidden - Data privacy/encapsulation
console.log(acc);
*/

//********************************************* Encapsulation: Protected properties and methods ************************
/* 
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // protected field(using _) - just a convention, not truly encapsulated
    this._pin = pin;
    this._movements = [];
    this.locale = navigator.language;
    console.log(`Thanks for opening an account, ${owner}`);
  }
  // Public interface
  getMovements() {
    return this.movements;
  }
  deposit(val) {
    this._movements.push(val);
  }
  withdrawal(val) {
    this.deposit(-val);
  }
  _approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Congratulations! Loan approved');
    }
  }
}

const acc = new Account('Jonas', 'EUR', 1111);
// acc._movements.push(250); // still can be accessed
// acc._movements.push(-140);
acc.deposit(250);
acc.withdrawal(140);
acc.requestLoan(1000);
console.log(acc);
console.log(acc.getMovements());
*/

//********************************** Encapsulation: private class fields and methods (True encapsulation) ***************

class Account {
  // 1. public fields (intances) : not added to prototypes
  locale = navigator.language;

  // 2. private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;
    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3. Public methods : all these below methods

  // Public interface
  getMovements() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdrawal(val) {
    this.deposit(-val);
    return this;
  }
  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log('Congratulations! Loan approved');
      return this;
    }
  }

  // 4. private methods
  #approveLoan(val) {
    return true;
  }

  static helper() {
    console.log('helper');
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

acc1.deposit(250);
acc1.withdrawal(140);
acc1.requestLoan(1000);
console.log(acc1);

// acc1.#movements; // not accessible
// acc1.#pin; // not accessible
// console.log(acc1.#approveLoan(2000)); // not accessible

Account.helper();

//******************************************************** Chaining methods ******************************************

// return "this" from methods to make them chainable
acc1
  .deposit(300)
  .deposit(500)
  .withdrawal(35)
  .requestLoan(25000)
  .withdrawal(4000);
console.log(acc1.getMovements());

///////////////////////////////////////////////////////
////////////////// CODING CHALLENGE #4
/* 
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is goint at ${this.speed} km/h`);
    return this;
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is goint at ${this.speed} km/h`);
    return this;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
  get speedUS() {
    return this.speed / 1.6;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      } %`
    );
    return this;
  }
}

const car1 = new EVCl('Rivian', 120, 23);
car1.accelerate().accelerate().brake().chargeBattery(50).accelerate();
*/
