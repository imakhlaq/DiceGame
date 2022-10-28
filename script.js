"use strict";
//retriving score
const score1El = document.getElementById("score1");
const score2El = document.getElementById("score2");
//current score
const current1El = document.getElementById("current1");
const current2El = document.getElementById("current2");
//getting player Names
const player1El = document.getElementById("player1");
const player2El = document.getElementById("player2");

const dice = document.getElementById("dice");

//setting score
score1El.textContent = 0;
score2El.textContent = 0;

//function for random number

const genRandomNum = function () {
  const randomNum = Math.floor(Math.random() * 6 + 1);
  return randomNum;
};

//players final score
let finalscore1 = 0;
let finalscore2 = 0;
//players current score
let currentscore1 = 0;
let currentscore2 = 0;
