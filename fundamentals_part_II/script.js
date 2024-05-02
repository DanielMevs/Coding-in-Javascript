"use strict";

/*let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;

if (hasDriversLicense) console.log("I can drive :D"); */

// const interface = 'Audio';
// const private = 534;
// const if = 23;
/*
function logger() {
  console.log("My name is John");
}

// calling / running / invoking the function
logger();

// functions allow us to write reusable chunks of code
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// Function declaration
// const age1 = calcAge1(1991);

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);

console.log(age1);

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age1, age2);

*/
/*
// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

// Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;

const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "John"));
console.log(yearsUntilRetirement(1980, "Bob"));
*/
/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}
function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  // console.log(apples, oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }

  // return `${firstName} retires in ${retirement}
  // years`;
};
console.log(yearsUntilRetirement(1991, "Mike"));
console.log(yearsUntilRetirement(1970, "Jones"));
*/

// Arrays

/*
const friends = ["Michael", "Steven", "albert"];
console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);

// Getting the last element in the array
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

// Arrays can hold values of different types
const example = ["John", 33, true, friends];
console.log(example);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1990, 1960, 2002, 2018, 2010];

console.log(calcAge(years[0]));
console.log(calcAge(years[1]));
console.log(calcAge(years[years.length - 1]));

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];

console.log(ages);
*/
/*
const friends = ["Michael", "Steven", "Albert"];

// Add elements
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

// Remove elements
const jay = friends.pop(); // Last
console.log(jay);
const albert = friends.pop();
console.log(albert);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(34);
console.log(friends.includes("Steven"));
console.log(friends.includes("34"));

console.log(friends.indexOf("34"));

if (friends.includes("Albert")) {
  console.log("You have a friend called Albert");
}
if (friends.includes("Michael")) {
  console.log("You have a friend called Michael");
}
*/
/*
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Gilbert", "Steven"],
];

// Object
const jonas = {
  firstName: "Jonas",
  lastName: "Schedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Gilbert", "Steven"],
};

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends"
// );

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose between firstName, lastName, job and friends"
//   );
// }

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

// Challenge
// Jonas as 3 friends, and his best friend is called
// Michael

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`
);
*/
/*
const jonas = {
  firstName: "Jonas",
  lastName: "Schedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Gilbert", "Steven"],
  hasDriversLicense: false,
  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },
  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYear;
  // },
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

// console.log(jonas.calcAge(1991));
console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.getSummary());
*/
/*
// for loop keeps running while condition is true
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️`);
}
const types = [];

const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Gilbert", "Steven"],
  true,
];

for (let i = 0; i < jonasArray.length; i++) {
  // Reading from jonasArray
  console.log(jonasArray[i], typeof jonasArray[i]);

  // Filling types array
  types.push(typeof jonasArray[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  let age = 2037 - years[i];
  ages.push(age);
}

console.log(ages);

// Continue and break
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] === "number") break;
  console.log(jonasArray[i], typeof jonasArray[i]);
  // if (typeof jonasArray[i] !== "string") continue;
  // console.log(jonasArray[i], typeof jonasArray[i]);
}
*/
/*
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Gilbert", "Steven"],
  true,
];

for (let i = jonasArray.length - 1; i >= 0; i--) {
  console.log(jonasArray[i]);
}

for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`---- Starting exercise ${exercise}`);
  for (let rep = 1; rep <= 10; rep++) {
    console.log(`Doing rep ${rep}`);
  }
}
*/

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️`);
}

let rep = 1;
while (rep <= 10) {
  console.log(`WHILE: Lifting weights repetition ${rep} 🏋️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice != 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end");
}
