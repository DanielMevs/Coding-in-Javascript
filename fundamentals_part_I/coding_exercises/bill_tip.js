const bill = 275;

const tip = 50 <= bill <= 300 ? bill * 0.15 : bill * 0.2;

/* Write your code below. Good luck! 🙂 */
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`
);
