'use strict';

let secretNumber = Math.floor(Math.random() * 20 + 1);
let number = document.querySelector('.number');
const userInput = document.querySelector('.guess');
const message = document.querySelector('.message');
const scoreBoard = document.querySelector('.score');
const body = document.querySelector('body');
const resetBtn = document.querySelector('.again');
let score = 20;

// Game logic
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    message.textContent = '⛔️ No Number!';

    // When player wins
  } else if (guess === secretNumber) {
    message.textContent = '🏆 Correct! You WIN!!';
    number.textContent = secretNumber;
    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';

    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = '⬆️ Higher...';
      score--;
      scoreBoard.textContent = score;
    } else {
      message.textContent = '💣 YOU LOSE!!';
      scoreBoard.textContent = 0;
      number.textContent = secretNumber;
    }

    // When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = '⬇️ Lower...';
      score--;
      scoreBoard.textContent = score;
    } else {
      message.textContent = '💣 YOU LOSE!!';
      scoreBoard.textContent = 0;
      number.textContent = secretNumber;
    }
  }
});

resetBtn.addEventListener('click', function () {
  secretNumber = Math.floor(Math.random() * 20 + 1);
  userInput.value = '';
  number.textContent = '?';
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
  message.textContent = 'Start guessing...';
  score = 20;
  scoreBoard.textContent = 20;
});
