"use strict";

// document.querySelector('.message').textContent = 'Correct Number!🎉';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 15;

// document.querySelector('.guess').value = 20;
// console.log(document.querySelector('.guess').value);

//Defining a secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// Defining a score value
let score = 20;
let highscore = 0;
// Adding event listener to the check button
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number!';
    displayMessage("⛔ No Number!");
    // When guess is correct
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number");
    // document.querySelector('.message').textContent = '🎉 Correct Number';
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    // When guess is not correct
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
      displayMessage(guess > secretNumber ? "📈 Too High!" : "📉 Too Low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("❌ You lost the game!");
      // document.querySelector('.message').textContent = '❌ You lost the game!';
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Adding event listener to again button - Challenge
document.querySelector(".again").addEventListener("click", function () {
  // creating a new secret number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage("Start guessing...");
  // document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
