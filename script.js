"use strict";
//retriving score
const score1El = document.getElementById("score1");
const score2El = document.getElementById("score2");
//current score
const current1El = document.getElementById("current1");
const current2El = document.getElementById("current2");
//getting player active
const player1El = document.getElementById("player1");
const player2El = document.getElementById("player2");
//dice
const diceEl = document.getElementById("dice");
//dice roll button
const btnroll = document.querySelector(".diceroll");

//setting score
score1El.textContent = 0;
score2El.textContent = 0;

//function for random number

const genRandomNum = function () {
  const randomNum = Math.floor(Math.random() * 6 + 1);
  return randomNum;
};

//players final score
const score = [0, 0];
//current playing
const activeplayer = 0; //0 means 1st player 1 means 2nd player
//players current score
let currentscore1 = 0;
let currentscore2 = 0;

//showing dice
const btnrollclick = function () {
  let rollnum = genRandomNum();
  diceEl.classList.remove("hidden");

  //manupulating dice img
  diceEl.src = `img/dice-${rollnum}.png`;
  //making card active
  player1El.classList.add("active");
  if (rollnum !== 1 && finalscore1 <= 100) {
    currentscore1 += rollnum;
    current1El.textContent = currentscore1;
  } else {
    current1El.textContent = 0;
    finalscore1 = currentscore1;
    score1El.textContent = finalscore1;
    player1El.classList.remove("active");
  }
};
btnroll.addEventListener("click", btnrollclick);
