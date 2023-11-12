'use strict';

let secretNumber, score, highScore;

const initializeGame = () => {
  secretNumber = generateSecretNumber();
  score = 20;
  highScore = 0;
  displayMessage('Start guessing...');
  displayNumber('?');
  displayScore(score);
  setBackgroundColor('#222');
  setNumberWidth('15rem');
  resetInput();
};

const generateSecretNumber = () => Math.trunc(Math.random() * 20) + 1;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const displayNumber = number => {
  document.querySelector('.number').textContent = number;
};

const displayLostGame = () => {
    displayMessage('You lost the game!');
    setBackgroundColor('#e70000')
}
const displayScore = score => {
  document.querySelector('.score').textContent = score;
};

const setBackgroundColor = color => {
  document.querySelector('body').style.backgroundColor = color;
};

const setNumberWidth = width => {
  document.querySelector('.number').style.width = width;
};

const resetInput = () => {
  document.querySelector('.guess').value = '';
};

const checkGuess = () => {
  const guess = Number(document.querySelector('.guess').value);

  if (score === 0) {
    displayLostGame();
    return;
  }

  if (guess === 0) {
    displayMessage('No number!');
  } else if (guess === secretNumber) {
    displayMessage('Correct number!');
    setBackgroundColor('#60b347');
    setNumberWidth('30rem');
    displayNumber(secretNumber);

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else {
    displayMessage(guess > secretNumber ? 'Too High!' :  'Too Low!');
    updateScore();
  }

  if (score === 0) {
   displayLostGame();
    return;
  }
};

const updateScore = () => {
  score--;
  displayScore(score);
};

document.querySelector('.check').addEventListener('click', checkGuess);
document.querySelector('.again').addEventListener('click', initializeGame);

initializeGame();
