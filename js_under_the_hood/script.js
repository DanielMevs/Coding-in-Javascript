'use strict';

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName);

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      // Variables declared with var are function scoped.
      var millenial = true;
      // Creating NEW variable with same name as outer
      // scope's variable
      const firstName = 'Steven';

      // Reassigning outer scope's variable
      output = 'NEW OUTPUT!';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // Functions are blocked scoped (if scrict mode is on)
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'John';
calcAge(1991);
// console.log(age);
// printAge();
*/
// this in the global scope
// is just the window object
// console.log(this);

/*
// this in the function scope
// is undefined
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
// calcAge(1991);

// this in an arrow function uses
// its parent scope (lexical this
// keyword)
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};

// calcAgeArrow(1980);

const john = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
john.calcAge();

const matilda = {
  year: 2017,
};

// Method borrowing
matilda.calcAge = john.calcAge;

console.log(matilda);

matilda.calcAge();

const f = john.calcAge;

f();
*/
// var firstName = 'Matilda';
/*
const john = {
  firstName: 'John',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },
  // Never use an arrow function as
  // a method!
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
  // greet: function () {
  //   console.log(this);
  //   console.log(`Hey ${this.firstName}`);
  // },
};

// john.greet();
john.calcAge();

const addExpr = function (a, b) {
  return a + b;
};
console.log(addExpr(2, 3));
console.log(addExpr(2, 5, 8, 12));

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
// addArrow(2, 5, 8);
*/

// primitives
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'John',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log('friend', friend);
console.log('me', me);
