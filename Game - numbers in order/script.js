'use strict';

let button = document.getElementById('button');
let timerP = document.getElementById('timerP');
let contMiddle2 = document.getElementsByClassName('contMiddle2');
let x = 4;
let st = 2;
let lvl = 1;
button.addEventListener('click', start);






function start() {
	window.timerId = window.setInterval(timer, 1000);
	createTable(shuffle(range(1, x)), st);
	button.removeEventListener('click', start);
	button.addEventListener('click', restart);
	this.value = 'Начать заново';
}

function timer() {
	if (timerP.innerHTML == 0) {
		alert('Вы проиграли');
		restGame(0);
	} else {
		timerP.innerHTML--;
	}
}

function restart() {
	restGame(0);
}

	
function createTable(arr, stlb) {
	window.newTab = document.createElement('table');
	for (let i = 0; i < (arr.length/stlb); i++) {
		let newTr = document.createElement('tr');
		for (let j = 0; j < stlb; j++) {
			let newTd = document.createElement('td');
			for (let k = 0; k < stlb; k++) {
				if (i == k) {
					newTd.innerHTML = arr[j + (stlb*k)]
				}
			}
			newTd.addEventListener('click', push);
			newTr.appendChild(newTd);
		}
		newTab.appendChild(newTr);
	}
	contMiddle2[0].appendChild(newTab);
}


function range(num1, num2) {
	let arr = [];
	for (let i = 0, j = num1; i < (num2 - num1),j <= num2; i++, j++) {
		arr[i] = j;
	}
	return arr;
}

function shuffle(arr) {
	let newArr = [];
	let ArrLength = arr.length;
	for (let i = 0; i < ArrLength; i++) {
		let rnd = getRandomInt(0, arr.length-1);
		newArr[i] = arr.splice(rnd,1);
	}
	return newArr;
	
	
	
	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
}

function push() {
	let arrActive = document.getElementsByClassName('active');
	if (this.innerHTML == arrActive.length+1) {
		this.classList.toggle('active');
	}
	let arrTd = document.getElementsByTagName('td');
	if (arrActive.length == arrTd.length) {
		alert('Вы прошли ' + lvl + ' уровень!');
		restGame(1);
	}
}

function restGame(num) {
	contMiddle2[0].removeChild(newTab);
	timerP.innerHTML = 75;
	if (num == 1) {
		let newX = (Math.sqrt(x) + lvl)*(Math.sqrt(x) + lvl);
		createTable(shuffle(range(1, newX)), st+lvl);
		lvl++;
	} else {
		createTable(shuffle(range(1, x)), st);
	}
}