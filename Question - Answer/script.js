'use strict';

let span = document.getElementById('span');
let a2 = document.getElementById('a2');
let input = document.getElementById('input');
let button = document.getElementById('button');
let arr = {
	test: [
		{
			question: 'Вопрос 1',
			right: 'Правильный ответ 1',
		},
		{
			question: 'Вопрос 2',					
			right: 'Правильный ответ 2',
		},
		{
			question: 'Вопрос 3',
			right: 'Правильный ответ 3',
		},
	]
};
let x = 0;
let arrAnswerUsers = [];
span.innerHTML = arr.test[x].question;
a2.addEventListener('click', vpered);
button.addEventListener('click', prov);



function vpered() {
	if (x == arr.test.length - 1) {
		a2.disabled = true;
	} else {
		x++;
	}
	span.innerHTML = arr.test[x].question;
	if (span.innerHTML == arr.test[arr.test.length - 1].question) {
		a2.disabled = true;
	}
	button.disabled = false;
}

function prov() {
	arrAnswerUsers.push(input.value);
	button.disabled = true;
	if (a2.disabled === true) {
		end();
	}
	
	
	function end() {
		let contAnwers = document.getElementById('contAnwers');
		let awswerDiv = document.getElementById('awswerDiv');
		for (var i = 0; i < arr.test.length; i++) {
			crLi();
		}
		awswerDiv.style.display = 'block';
		
		function crLi() {
			let newLi = document.createElement('li');
			if (arrAnswerUsers[i] == arr.test[i].right) {
				newLi.innerHTML = 'Вопрос № ' + Number(i+1) + ': ' + arr.test[i].question + '. Ваш ответ: ' + arrAnswerUsers[i] + '. Ответ указан верно!';
			} else {
				newLi.innerHTML = 'Вопрос № ' + Number(i+1) + ': ' + arr.test[i].question + '. Ваш ответ: ' + arrAnswerUsers[i] + '. Ответ указан неверно! Правельный ответ: ' + arr.test[i].right + '.'; 
			}
			contAnwers.appendChild(newLi);
		}
	}
}