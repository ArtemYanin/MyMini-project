'use strict';

let input = document.getElementById('input');
let buttonC = document.getElementById('buttonC');
let butArrLeft = document.getElementById('butArrLeft');
let table = document.getElementById('tableCalc');
let contCalcInpDel = document.querySelector('#contCalcInpDel');
table.style.width = `${contCalcInpDel.offsetWidth}px`;
buttonC.addEventListener('click', del);
butArrLeft.addEventListener('click', delLastSimbol);
input.addEventListener('keyup', pushKeyboard);

crStrPush(1, table);
crStrPush(2, table);
crStrPush(3, table);
crStrPush(4, table);

function crStrPush(noStr, par) {
	if (noStr == 1) {
		let newTr = document.createElement('tr');
		crPush('1', newTr, push);
		crPush('2', newTr, push);
		crPush('3', newTr, push);
		crPush('/', newTr, push);
		par.appendChild(newTr);
	}
	if (noStr == 2) {
		let newTr = document.createElement('tr');
		crPush('4', newTr, push);
		crPush('5', newTr, push);
		crPush('6', newTr, push);
		crPush('*', newTr, push);
		par.appendChild(newTr);
	}
	if (noStr == 3) {
		let newTr = document.createElement('tr');
		crPush('7', newTr, push);
		crPush('8', newTr, push);
		crPush('9', newTr, push);
		crPush('-', newTr, push);
		par.appendChild(newTr);
	}
	if (noStr == 4) {
		let newTr = document.createElement('tr');
		crPush('0', newTr, push);
		crPush('.', newTr, push);
		crPush('=', newTr, pushEval);
		crPush('+', newTr, push);
		par.appendChild(newTr);
	}
}

function crPush(Text, par, fuCl) {
	let newTd = document.createElement('td');
	newTd.innerHTML = Text;
	newTd.style.padding = '10px';
	newTd.style.cursor = 'pointer';
	newTd.addEventListener('click', fuCl);
	par.appendChild(newTd);
}

function push() {
	input.value += this.innerHTML;
}

function pushEval() {
	input.value = eval(input.value);
}

function pushKeyboard(event) {
	if (window.event.keyCode === 13) {
		pushEval();
	}
	if (!/\d$/.test(input.value) && !/\W$/.test(input.value)) {
		delLastSimbol();
	}
}

function del() {
	input.value = '';
}

function delLastSimbol() {
	input.value = input.value.slice(0, -1);
}