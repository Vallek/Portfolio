'use strict';
let header = document.querySelector('.header');
let showButton = header.querySelector('.header__show');
let title = header.querySelector('.header__title');
let about = header.querySelector('.header__about-me');
let info = header.querySelector('.header__info');
let main = header.querySelector('.header__main');
let intro = header.querySelector('.header__intro');

let arr = [];
arr.push(about, info);

function hideNavOnStart() {
	for (let el of arr) {
		if (el != null &&
		window.innerWidth < 900) {
			el.classList.add('visually-hidden');
		}
		if (el != null &&
		window.innerWidth >= 900) {
			el.classList.remove('visually-hidden');
		}
	}
}
hideNavOnStart();

function showPopup() {
	for (let el of arr) {
		let elStyles = window.getComputedStyle(el);
		let displayValue = elStyles.getPropertyValue('display');
		if (el != null &&
			displayValue != 'none') {
			el.classList.toggle('visually-hidden');
			el.style.display = 'revert';
		}
		if (el != null && 
			displayValue == 'none') {
			el.style.display = 'revert';
			el.classList.remove('visually-hidden');
		}
	}
}
showButton.addEventListener('click', showPopup);

function hideNav() {
	for (let el of arr) {
		if (el != null &&
		window.innerWidth >= 900) {
			el.classList.remove('visually-hidden');
		}
	}
}
window.addEventListener('resize', hideNav);