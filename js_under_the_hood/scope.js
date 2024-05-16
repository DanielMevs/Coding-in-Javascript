const me = 'Jonas';
const job = 'teacher';
const year = 1989;

function calcAge(birthYear) {
  const now = 2037;
  const age = now - birthYear;
  return age;
}

console.log(now); // ReferenceError

if (year >= 1981 && year <= 1996) {
  const millenial = true;
  const food = 'Avocado toast';
}

console.log(millenial); // ReferenceError
