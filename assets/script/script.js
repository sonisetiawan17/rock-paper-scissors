const userChoice = document.getElementById('user_choice');
const userImage = document.getElementById('user_img');
const computerImage = document.getElementById('computer_img');
const computerChoice = document.getElementById('computer_choice');
const gameResult = document.getElementById('result');
const possibleChoice = document.querySelectorAll('button');
const resetGame = document.getElementById('reset');

let userChoiceResult;
let computerChoiceResult;
let result;

possibleChoice.forEach((choice) =>
  choice.addEventListener('click', (e) => {
    userChoiceResult = e.target.id;
    userImage.innerHTML = `<img src="/assets/img/${userChoiceResult}.png" />`;
    userChoice.textContent = userChoiceResult;
    generateComputerChoice();
    hasil();
  })
);

function generateComputerChoice() {
  const number = Math.floor(Math.random() * 3) + 1;
  if (number === 1) {
    computerChoiceResult = 'rock';
  }
  if (number === 2) {
    computerChoiceResult = 'paper';
  }
  if (number === 3) {
    computerChoiceResult = 'scissors';
  }

  computerImage.innerHTML = `<img src="/assets/img/${computerChoiceResult}.png" alt='${computerChoiceResult}' />`;
  computerChoice.textContent = computerChoiceResult;
}

function hasil() {
  if (userChoiceResult === 'rock' && computerChoiceResult === 'scissors') {
    result = 'You Win!';
    document.body.style.backgroundColor = '#70e000';
    gameResult.style.color = '#70e000';
  } else if (userChoiceResult === 'rock' && computerChoiceResult === 'paper') {
    result = 'You Lose!';
    document.body.style.backgroundColor = 'red';
    gameResult.style.color = 'red';
  } else if (userChoiceResult === 'paper' && computerChoiceResult === 'rock') {
    result = 'Your Win!';
    document.body.style.backgroundColor = '#70e000';
    gameResult.style.color = '#70e000';
  } else if (
    userChoiceResult === 'paper' &&
    computerChoiceResult === 'scissors'
  ) {
    result = 'Your Lose!';
    document.body.style.backgroundColor = 'red';
    gameResult.style.color = 'red';
  } else if (
    userChoiceResult === 'scissors' &&
    computerChoiceResult === 'rock'
  ) {
    result = 'Your Lose!';
    document.body.style.backgroundColor = 'red';
    gameResult.style.color = 'red';
  } else if (
    userChoiceResult === 'scissors' &&
    computerChoiceResult === 'paper'
  ) {
    result = 'Your Win!';
    document.body.style.backgroundColor = '#70e000';
    gameResult.style.color = '#70e000';
  } else {
    result = "It's draw";
    document.body.style.backgroundColor = 'black';
    gameResult.style.color = 'white';
  }
  gameResult.textContent = result;
}

function reset() {
  userChoice.textContent = '';
  userImage.innerHTML = '';
  computerChoice.textContent = '';
  computerImage.innerHTML = '';
  gameResult.textContent = '';
}

resetGame.addEventListener('click', reset);
