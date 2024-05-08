'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  }
  //When player wins
  else if (guess == secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }
  // When guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
    } else {
      document.querySelector('.message').textContent = 'You lost the game! 🤯';
    }
  }
  // When guess is too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
    } else {
      document.querySelector('.message').textContent = 'You lost the game! 🤯';
    }
  }
  document.querySelector('.score').textContent = score;
});
// document.querySelector('.check').addEventListener('click', function () {
//   console.log(document.querySelector('.guess').value);
//   document.querySelector('.message').textContent = 'Correct Number!';
// });

/// Coding Challenge 1:
/*

Implement the Again! functionality

1. Select the element with the '.again' class
and attach a click event handler

2. In the handler function, restore initial
value of the score and number variables

3. Restore the initial conditions of the
message, number, score and guess input 
field.

4. Also, restore the original background color
(#222) and number width (15rem)

*/
document.querySelector('.again').addEventListener('click', function () {
  // Resetting the number
  let number = document.querySelector('.number');
  number.textContent = '?';
  number.style.width = '15rem';

  // Resetting the background
  let body = document.querySelector('body');
  body.style.backgroundColor = '#222';

  // Resetting the message
  let message = document.querySelector('.message');
  message.textContent = 'Start guessing...';

  // Resetting the score and secret number
  score = 20;
  let scoreField = document.querySelector('.score');
  scoreField.textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // Resetting input guess box
  let guess = document.querySelector('input.guess');
  guess.value = '';
});
