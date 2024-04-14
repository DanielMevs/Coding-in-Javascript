const firstName = "John";
const job = "teacher";
const birthYear = 1993;
const year = 2037;

const john =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(john);

const johnNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(johnNew);

console.log(`Just a regular string...`);

console.log(
  "String with \n\
multiple \n\
lines"
);

console.log(`String
multiple
lines`);
