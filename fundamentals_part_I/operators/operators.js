/*
// Math operators
const now = 2037;


const ageJohn = now - 1991;
const ageSarah = now - 2018;
console.log(ageJohn, ageSarah);
console.log(ageJohn * 2, ageSarah / 2);
console.log(ageJohn * 2, ageJohn / 10, 2 ** 3);

const firstName = "John";
const lastName = "Doe";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10
x *= 4; // x = x * 4
x++; // x = x + 1
x--; // x = x - 1
x--; // x = x - 1
console.log(x);

// Comparison operators
console.log(ageJohn > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);
*/

const now = 2037;

const ageJohn = now - 1991;
const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

let x, y;

x = y = 20 - 10;
// console.log(x, y);

const avgAge = (ageJohn + ageSarah) / 2;
// console.log(ageJohn, ageSarah, avgAge);

// const age = 18;
const age = "18";
// === strict equality operator does not do type coercion
if (age === 18) {
  console.log("You just became an adult. (strict)");
}
// == loo

if (age == 18) {
  //   console.log("You just became an adult.(loose)");
}

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favorite === 7) {
  console.log("7 is also a cool number");
} else {
  console.log("Number is not 23 or 7");
}

if (favorite !== 23) {
  console.log("Why not 23?");
}
