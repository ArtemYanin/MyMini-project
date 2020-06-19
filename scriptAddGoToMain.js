'use strict';

let contDecription = document.querySelector('.contDecription');

let newA = document.createElement('a');
newA.href = '../index.html';
newA.classList.add('button', 'MiniProject_button');
newA.innerHTML = 'Go back to the main page';
document.body.insertBefore(newA, contDecription);

