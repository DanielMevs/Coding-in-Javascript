const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLet = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLet} years :)`);
}

let century;
const birthYear = 2008;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
