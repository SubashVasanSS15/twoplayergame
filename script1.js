"use strict";
//selecting classes and ids from the html & css
const player0el = document.querySelector(".player--0");
const player1el = document.querySelector(".player--1");

const score0el = document.querySelector("#score--0");
const score1el = document.querySelector("#score--1");

const current0el = document.querySelector("#current--0");
const current1el = document.querySelector("#current--1");

const diceel = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let scores, currentScore, activePlayer, playing;
//Setting conditions based on our requirements

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  current0el.textContent = 0;
  current1el.textContent = 0;
  score0el.textContent = 0;
  score1el.textContent = 0;
  diceel.classList.add("hidden");
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--winner");
  player0el.classList.add("player--active");
};
init();

const switchPlayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0el.classList.toggle("player--active");
  player1el.classList.toggle("player--active");
};

//Rolling dice functionality
btnRoll.addEventListener("click", function () {
  if (playing) {
    //1.Generating a random number for dice
    const dice = Math.trunc(Math.random() * 6) + 1;
    //console.log(dice);
    //2.display the dice based on the random number
    diceel.classList.remove("hidden");
    diceel.src = `dice-${dice}.png`; //don't use neither conditional statements nor switch cas use template literal for dynamically allocating
    //3.Check whether the rolled dice or the random number is 1
    if (dice !== 1) {
      //add the dice number to the currentscore
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //Switch to next player
      switchPlayer();
    }
  }
});
btnHold.addEventListener("click", function () {
  if (playing) {
    //1.Add current score to the score of the active player
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2.if the score of an active player is more than 100 he is the winner
    if (scores[activePlayer] >= 20) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      playing = false;
      diceel.classList.add("hidden");
    } else {
      //3.after updating the score by the current score we have to switch the players
      switchPlayer();
    }
  }
});
btnNew.addEventListener("click", init);
