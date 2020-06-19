'use strict';

let tableTICTAC = document.getElementById('tableTICTAC');
let contSpanGame = document.querySelector('.contSpanGame');
let gamer = 'x';

for (let i = 0; i < 3; i++) {
	let newTr = document.createElement('tr');
	for (let j = 0; j < 3; j++) {
		let newTd = document.createElement('td');
		newTd.addEventListener('click', push);
		newTr.appendChild(newTd);
	}
	tableTICTAC.appendChild(newTr);
}
let arrTd = document.getElementsByTagName('td');
	
	
function push() {
	this.innerHTML = gamer;
	gamer = getNextGamer(gamer);
	contSpanGame.innerHTML = gamer;
	this.removeEventListener('click', push);
	let prov = Proverka();
	if (prov == 1) {
		startNewGame();
	}
}
	
function getNextGamer(gamer) {
	if (gamer == 'x') {
		return 'o';
	}
	if (gamer == 'o') {
		return 'x';
	}
}

function Proverka() {
	let x = algProv('x');
	let o = algProv('o');
	let n = provNichya();
	if (x == 1 || o == 1 || n == 1) {
		return 1;
	}
	
	
	function provNichya() {
		if (x == 1 || o == 1) {
			return 0;
		}
		let q = 0;
		for (let k = 0; k < arrTd.length; k++) {
			if (arrTd[k].innerHTML == '') {
				q++;
			}
		}
		if (q == 0) {
			alert('Draw');
			return 1;
		}
	}
}
	
function algProv(gamer) {
	let arrCombWin = [
		[0,1,2],
		[3,4,5],
		[6,7,8],
		[0,3,6],
		[1,4,7],
		[2,5,8],
		[0,4,8],
		[2,4,6],
	];
	
	for (let comb of arrCombWin) {
		let funProvPerem = funcProv(comb);
		if (funProvPerem == 1) {
			return 1
		}
	}
		
	function funcProv([num1, num2, num3]) {
		if (arrTd[num1].innerHTML == gamer && arrTd[num2].innerHTML == gamer && arrTd[num3].innerHTML == gamer) {
			alert(`The player won: ${gamer}`);
			return 1;
		}
	}
}

function startNewGame() {
	for (let i = 0; i < arrTd.length; i++) {
		arrTd[i].removeEventListener('click', push);
		arrTd[i].addEventListener('click', push);
		arrTd[i].innerHTML = '';
	}
}