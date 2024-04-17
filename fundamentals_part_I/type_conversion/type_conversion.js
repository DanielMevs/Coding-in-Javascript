const inputYear = "1991";

console.log(Number(inputYear), inputYear);

console.log(inputYear + 18);
console.log(Number("John"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion

// + converts numbers to strings
console.log("I am " + 23 + " years old");
// - has the opposite effect of +
// - converts strings to nums
console.log("23" - "10" - 3);

let n = "1" + 1;
n = n - 1;
console.log(n); // output: 10

console.log("10" - "4" - "3" - 2 + "5"); // output: 15
