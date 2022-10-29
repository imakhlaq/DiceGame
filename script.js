"use strict";
//retriving score
const score0El = document.getElementById("score0");
const score1El = document.getElementById("score1");
//current score
const current0El = document.getElementById("current0");
const current1El = document.getElementById("current1");
//getting player active
const player0El = document.getElementById("player0");
const player1El = document.getElementById("player1");
//dice
const diceEl = document.getElementById("dice");
//dice roll button
const btnroll = document.querySelector(".diceroll");
//hold button
const btnhold = document.querySelector(".hold");

//setting score
score0El.textContent = 0;
score1El.textContent = 0;

//players final score
const score = [0, 0];
//current playing
let activeplayer = 0; //0 means 1st player 1 means 2nd player
//players current score
const currentScore = [0, 0];

//function for random number

const genRandomNum = function () {
  const randomNum = Math.floor(Math.random() * 6 + 1);
  return randomNum;
};

//changing playerUi
const activeUI = function () {
  if (activeplayer == 0) {
    player0El.classList.add("active");
    player1El.classList.remove("active");
  } else {
    player0El.classList.remove("active");
    player1El.classList.add("active");
  }
};
//for setting current score
const setCorrentScore = function () {
  if (activeplayer === 0) {
    current0El.textContent = currentScore[activeplayer];
  } else {
    current1El.textContent = currentScore[activeplayer];
  }
};
const resetCorrentScore = function () {
  if (activeplayer === 0) {
    currentScore[activeplayer] = 0;
    current0El.textContent = currentScore[activeplayer];
  } else {
    currentScore[activeplayer] = 0;
    current1El.textContent = currentScore[activeplayer];
  }
};
//for setting final score
const setFinalScore = function () {
  if (activeplayer === 0) {
    score[activeplayer] = currentScore[activeplayer];
    score0El.textContent = score[activeplayer];
  } else {
    score[activeplayer] = currentScore[activeplayer];
    score1El.textContent = score[activeplayer];
  }
};
//checking for winner
const checkWinner = function () {
  if (activeplayer === 0 && score[activeplayer] >= 30) {
    player0El.classList.add("winner");
    player1El.classList.add("losser");
    btnroll.disabled = true;
  } else if (score[activeplayer] >= 30) {
    player1El.classList.add("winner");
    player0El.classList.add("losser");
    btnroll.disabled = true;
  }
};
//showing dice
const btnrollclick = function () {
  let rollnum = genRandomNum();
  diceEl.classList.remove("hidden");

  //manupulating dice img
  diceEl.src = `img/dice-${rollnum}.png`;
  //making card active
  if (rollnum !== 1) {
    activeUI(activeplayer);
    currentScore[activeplayer] += rollnum;
    setCorrentScore();
  } else {
    setFinalScore();
    resetCorrentScore();
    checkWinner();
    activeplayer = activeplayer === 0 ? 1 : 0;
    activeUI(activeplayer);
  }
};
btnroll.addEventListener("click", btnrollclick);
//hold logic
const btnholdclick = function () {
  setFinalScore();
  checkWinner();
  activeplayer = activeplayer === 0 ? 1 : 0;
  activeUI(activeplayer);
};

// hold event listner
btnhold.addEventListener("click", btnholdclick);
