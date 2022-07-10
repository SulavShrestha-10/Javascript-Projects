'use strict';
/* El means DOM element here*/
// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const currentPlayer0score = document.getElementById('current--0');
const currentPlayer1score = document.getElementById('current--1');
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let scores, currentScore, activePlayer, playingStatus;

// Setting the text content 0 in the elements
score0El.textContent = 0;
score1EL.textContent = 0;
// Adding a new class
diceEL.classList.add('hidden');
// Initialization
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playingStatus = true;
  score0El.textContent = 0;
  score1EL.textContent = 0;
  currentPlayer0score.textContent = 0;
  currentPlayer1score.textContent = 0;
  diceEL.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();
// function to switch players
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  //checking if the active player is 0 or 1 and switching accordingly
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
btnRoll.addEventListener('click', function () {
  // Generate random dice roll
  if (playingStatus) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    // Display dice
    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png`;
    //Check dice rolled 1 or not,
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //if 1, switch player
      switchPlayer();
    }
  }
});
btnHold.addEventListener('click', function () {
  if (playingStatus) {
    // Add the current score to active players total score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // Check if score equals 100
    if (scores[activePlayer] >= 100) {
      // End the game if score is 100
      playingStatus = false;
      diceEL.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .textContent.classList.remove('player--active');
    } else {
      // Switch player
      switchPlayer();
    }
  }
});
btnNew.addEventListener('click', init);
