'use strict';

let input = document.getElementById('input');
let check = document.getElementById('check');
let startGame = document.getElementById('startGame');
check.addEventListener('click', Check);
startGame.addEventListener('click', StartGame);
let rndNum = getRandomArbitary(0, 100);


function getRandomArbitary(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function StartGame() {
	window.timerId = window.setInterval(timer, 1000);
	input.disabled = false;
	startGame.disabled = true;
	check.disabled = false;
}

function Check() {
	if (input.value < rndNum) {
		alert('Enter a larger number');
	}
	if (input.value > rndNum) {
		alert('Enter a smaller number');
	}
	if (rndNum == input.value) {
		alert('You guessed number!');
		gameOver();
	}
	input.value = '';
}

function timer() {
	if (timerP.innerHTML == 0) {
		alert('Time is up, you lose');
		gameOver();
	} else {
		timerP.innerHTML--;
	}
}

function gameOver() {
	timerP.innerHTML = 100;
	rndNum = getRandomArbitary(1, 3);
	window.clearInterval(window.timerId);
	input.disabled = true;
	startGame.disabled = false;
	check.disabled = true;
}