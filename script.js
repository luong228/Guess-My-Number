'use strict';

let secretNumber = Math.trunc(Math.random(20) * 20) + 1;
let score = 20
let highScore = 0

console.log(secretNumber);
document.querySelector('.check').addEventListener('click', (e) => {
    if(score === 0) {
        document.querySelector('.message').textContent = 'You lost the game!'
        return
    }

    const guess = Number(document.querySelector('.guess').value)

    if(guess === 0) {
        document.querySelector('.message').textContent = 'No number!'
    }
    else if(guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct number!'
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        document.querySelector('.number').textContent = secretNumber 
        
        if (score > highScore) {
            highScore = score
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    
    else if(guess > secretNumber) {
        document.querySelector('.message').textContent = 'Too High!'
        score--;
        document.querySelector('.score').textContent = score
    }
    else if(guess < secretNumber) {
        document.querySelector('.message').textContent = 'Too Low!'
        score--;
        document.querySelector('.score').textContent = score
    }
    if(score === 0) {
        document.querySelector('.message').textContent = 'You lost the game!'
        return
    }
})

document.querySelector('.again').addEventListener('click', () => {
    score = 20
    secretNumber = Math.trunc(Math.random(20) * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';

    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';

})