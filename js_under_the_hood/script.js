'use strict';

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
