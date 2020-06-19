'use strict';

let DivInp = document.getElementById('DivInp');
let input = document.getElementById('input');
let DivNewCheck = document.getElementById('DivNewCheck');
input.addEventListener('keypress', (event) => {
	if(event.keyCode == 13) {
		crNewCheck();
	}
	
	function crNewCheck() {
		let newDivCont = document.createElement('div');
		crCheckbox();
		crDivName();
		crInpIzm();
		crButClose();
		newDivCont.classList.add('newDivCont');
		DivNewCheck.appendChild(newDivCont);
		input.value = '';
		
		function crInpIzm() {
			let newInpIzm = document.createElement('input');
			newInpIzm.classList.add('nameInpIzm');
			newInpIzm.addEventListener('keypress', saveIzmPressEnter);
			newInpIzm.addEventListener('blur', saveIzmBlur);
			newDivCont.appendChild(newInpIzm);
			
			function saveIzmPressEnter(event) {
				if (event.keyCode == 13) {				
					let thiss = this;
					saveIzmAlg(thiss);
				}
			}
			
			function saveIzmBlur() {
				let thiss = this;
				saveIzmAlg(thiss);
			}
			
			function saveIzmAlg(thiS) {
				thiS.style.display = 'none';
				thiS.parentElement.children[1].style.display = 'inline-block';
				thiS.parentElement.children[1].innerHTML = thiS.value;
			}
			
		}
		
		function crButClose() {
			let newButton = document.createElement('input');
			newButton.type = 'submit';
			newButton.value = 'Del';
			newButton.classList.add('button');
			newButton.addEventListener('click', delCheck);
			newDivCont.appendChild(newButton);
			
			function delCheck() {
				this.parentElement.parentElement.removeChild(this.parentElement);
			}
		}
		
		function crDivName() {
			let newDivName = document.createElement('div');
			newDivName.innerHTML = input.value;
			newDivName.classList.add('nameInpIzm');
			newDivName.addEventListener('dblclick', izmDivName);
			newDivCont.appendChild(newDivName);
			
			function izmDivName() {
				this.style.display = 'none';
				this.parentElement.children[2].style.display = 'inline';
				this.parentElement.children[2].value = this.innerHTML;
			}
		}
		
		function crCheckbox() {
			let newCheckbox = document.createElement('input');
			newCheckbox.type = 'checkbox';
			newCheckbox.addEventListener('click', checkDone);
			newDivCont.appendChild(newCheckbox);
			
			function checkDone() {
				this.style.display = 'none';
				this.parentElement.children[1].style.textDecoration = 'line-through';
				this.parentElement.children[1].style.marginLeft = '25px';
			}
		}
	}
});