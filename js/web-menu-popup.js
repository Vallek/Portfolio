'use strict';

// Popup remove state from url
const menuState = document.querySelector('#menustate');

document.querySelector('.popup-menu__open').addEventListener('click', (e) => {
  e.preventDefault();
  menuState.checked = true;
});

document.querySelector('.popup-menu__close').addEventListener('click', (e) => {
  e.preventDefault();
  menuState.checked = false;
});

// Fixed header + anim

const header = document.querySelector('.header');
const headerMenu = document.querySelector('.header__menu');
const menuButton = document.querySelector('.popup-menu__button');
const menuLink = document.querySelectorAll('.popup-menu__link');

function scrollHeader() {
	let pageTop = header.getBoundingClientRect().top;
	if (pageTop < -500) {
		headerMenu.classList.add('header__menu_anim');
	}
	else {
		headerMenu.classList.remove('header__menu_anim');
	}	
}

function closeMenu() {
	menuButton.click();
}

window.addEventListener('scroll', scrollHeader);
window.addEventListener('DOMContentLoaded', scrollHeader);
menuLink.forEach((el) => {el.addEventListener('click', closeMenu);});


