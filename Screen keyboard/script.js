'use strict';

let input = document.getElementById('input');
let tableKeyboard = document.getElementById('tableKeyboard');
let buttonC = document.getElementById('buttonC');
let contKeybInpDel = document.querySelector('.contKeybInpDel');
buttonC.addEventListener('click', del);
butArrLeft.addEventListener('click', delLastSimbol);
tableKeyboard.style.width = `${contKeybInpDel.offsetWidth}px`;

crStrPush(1);
crStrPush(2);
crStrPush(3);
crStrPush(4);

function crStrPush(noStr) {
	if (noStr == 1) {
		let newTr = document.createElement('tr');
		crPush('`', newTr);
		crPush('1', newTr);
		crPush('2', newTr);
		crPush('3', newTr);
		crPush('4', newTr);
		crPush('5', newTr);
		crPush('6', newTr);
		crPush('7', newTr);
		crPush('8', newTr);
		crPush('9', newTr);
		crPush('0', newTr);
		crPush('-', newTr);
		crPush('=', newTr);				
		tableKeyboard.appendChild(newTr);
	}
	if (noStr == 2) {
		let newTr = document.createElement('tr');
		crPush('q', newTr);
		crPush('w', newTr);
		crPush('e', newTr);
		crPush('r', newTr);
		crPush('t', newTr);
		crPush('y', newTr);
		crPush('u', newTr);
		crPush('i', newTr);
		crPush('o', newTr);
		crPush('p', newTr);
		crPush('[', newTr);
		crPush(']', newTr);
		crPush('|', newTr);				
		tableKeyboard.appendChild(newTr);
	}
	if (noStr == 3) {
		let newTr = document.createElement('tr');
		crPush('a', newTr);
		crPush('s', newTr);
		crPush('d', newTr);
		crPush('f', newTr);
		crPush('g', newTr);
		crPush('h', newTr);
		crPush('j', newTr);
		crPush('k', newTr);
		crPush('l', newTr);
		crPush(';', newTr);
		crPush('"', newTr);
		tableKeyboard.appendChild(newTr);
	}
	if (noStr == 4) {
		let newTr = document.createElement('tr');
		crPush('z', newTr);
		crPush('x', newTr);
		crPush('c', newTr);
		crPush('v', newTr);
		crPush('b', newTr);
		crPush('n', newTr);
		crPush('m', newTr);
		crPush(',', newTr);
		crPush('.', newTr);
		crPush('/', newTr);
		tableKeyboard.appendChild(newTr);
	}
}

function crPush(Text, par) {
	let newTd = document.createElement('td');
	newTd.innerHTML = Text;
	newTd.addEventListener('click', push);
	newTd.classList.add('tableKeyboardTd');
	par.appendChild(newTd);
}


function push() {
	input.value += this.innerHTML;
}

function del() {
	input.value = '';
}

function delLastSimbol() {
	input.value = input.value.slice(0, -1);
}