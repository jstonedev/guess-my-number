'use strict';

const userInput = document.querySelector('.guess');
const scoreBoard = document.querySelector('.score');
const highscoreBoard = document.querySelector('.highscore');
const body = document.querySelector('body');
const resetBtn = document.querySelector('.again');
let secretNumber = Math.floor(Math.random() * 20 + 1);
let number = document.querySelector('.number');
let score = 20;
let highscore = 0;

// Set diplay message
const displayMessage = (message) => {
  document.querySelector('.message').textContent = message;
};

const playGame = () => {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('⛔️ No Number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🏆 Correct! You WIN!!');
    number.textContent = secretNumber;
    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';

    // Check and set highscore
    if (score > highscore) {
      highscore = score;
      highscoreBoard.textContent = highscore;
    }

    // When guess is too low
  } else if (guess < secretNumber) {
    higherOrLower('⬆️ Higher...');

    // When guess is too high
  } else if (guess > secretNumber) {
    higherOrLower('⬇️ Lower...');
  }
};

const higherOrLower = (gameMessage) => {
  if (score > 1) {
    displayMessage(gameMessage);
    score--;
    scoreBoard.textContent = score;
  } else {
    displayMessage('💣 YOU LOSE!!');
    scoreBoard.textContent = 0;
    number.textContent = secretNumber;
  }
};

const resetGame = () => {
  secretNumber = Math.floor(Math.random() * 20 + 1);
  userInput.value = '';
  number.textContent = '?';
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
  displayMessage('Start guessing...');
  score = 20;
  scoreBoard.textContent = 20;
};

document.querySelector('.check').addEventListener('click', () => {
  playGame();
});

resetBtn.addEventListener('click', () => {
  resetGame();
});
