'use strict';

let inpName = document.getElementById('inpName');
let inpPrice = document.getElementById('inpPrice');
let inpQuan = document.getElementById('inpQuan');
let save = document.getElementById('save');
let tableOutList = document.getElementById('tableOutList');
let sumQuan = document.getElementById('sumQuan');
save.addEventListener('click', crStr);

function crStr() {
	let tr = document.createElement('tr');
	
	let inpQuanValRepl = searchAndReplace(inpQuan.value,',', '.');
	
	crTdIImp(inpName.value, tr, 'csIzmTd', 'csIzmInp');
	crTdIImp(inpPrice.value, tr, 'csIzmTd', 'csIzmInp');
	crTdIImp(inpQuanValRepl, tr, 'csIzmTd', 'csIzmInp');
	crTd(inpPrice.value * inpQuanValRepl, tr, 'suum');
	crBut('Delite', tr);
	
	tableOutList.appendChild(tr);
	tableOutList.style.display = 'table';
	sumQuan.innerHTML = `Total cost: ${Sum()}`;
	
	obnulVal();
	
	addEventIzmTd();
}



function crTdIImp(Text, par, classTd, classInp) {
	let div = document.createElement('div');
	div.style.display = 'table-cell';
	let td = document.createElement('td');
	td.innerHTML = Text;
	td.classList.add(classTd);
	div.appendChild(td);
	let input = document.createElement('input');
	input.value = Text;
	input.style.display = 'none';
	input.classList.add(classInp);
	div.appendChild(input);
	par.appendChild(div);
}

function crTd(Text, par, classs) {
	let td = document.createElement('td');
	td.innerHTML = Text;
	td.classList.add(classs);
	par.appendChild(td);
}

function Sum() {
	let sum = 0;
	let arrSuum = document.getElementsByClassName('suum');
	for (let i = 0; i < arrSuum.length; i++) {
		sum += Number(arrSuum[i].innerHTML);
	}
	return sum;
}

function crBut(Text, par) {
	let newBut = document.createElement('input');
	newBut.type = 'submit';
	newBut.value = Text;
	newBut.classList.add('button');
	newBut.addEventListener('click', delStr);
	par.appendChild(newBut);
}

function delStr() {
	this.parentElement.parentElement.removeChild(this.parentElement);
	sumQuan.innerHTML = `Total cost: ${Sum()}`;
	let AllButton = document.querySelectorAll('.button');
	if (AllButton.length === 1) {
		tableOutList.style.display = 'none';
	}
}

function obnulVal() {
	inpName.value = '';
	inpPrice.value = '';
	inpQuan.value = '';
}

function addEventIzmTd() {
	let arrIzmTd = document.getElementsByClassName('csIzmTd');
	let arrIzmInp = document.getElementsByClassName('csIzmInp');
	for (let i = 0; i < arrIzmTd.length; i++) {
		arrIzmTd[i].addEventListener('click', fnIzm);
		arrIzmInp[i].addEventListener('blur', fnSave);
	}
}

function fnIzm() {
	this.style.display = 'none';
	this.parentElement.children[1].style.display = 'inline';
}

function fnSave() {
	this.parentElement.children[0].innerHTML = this.value;
	this.style.display = 'none';
	this.parentElement.children[0].style.display = 'table-cell';
	this.parentElement.parentElement.children[3].innerHTML = Number(this.parentElement.parentElement.children[1].children[0].innerHTML * this.parentElement.parentElement.children[2].children[0].innerHTML);
	sumQuan.innerHTML = `Total cost: ${Sum()}`;
}

function searchAndReplace(txt, what, forWhat) {
	let reg = new RegExp(what);
	return (txt.replace(reg, forWhat));
}