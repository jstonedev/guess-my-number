'use strict';

const secretNumber = Math.floor(Math.random() * 20 + 1);
const message = document.querySelector('.message');
const scoreBoard = document.querySelector('.score');
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    message.textContent = '⛔️ No Number!';
  } else if (guess === secretNumber) {
    message.textContent = '🏆 Correct! You WIN!!';
  } else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = '⬆️ Higher...';
      score--;
      scoreBoard.textContent = score;
    } else {
      message.textContent = '💣 YOU LOSE!!';
      scoreBoard.textContent = 0;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = '⬇️ Lower...';
      score--;
      scoreBoard.textContent = score;
    } else {
      message.textContent = '💣 YOU LOSE!!';
      scoreBoard.textContent = 0;
    }
  }
});
