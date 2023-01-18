'use strict';

const backImg = document.querySelector('.section__image_back');
const frontImg = document.querySelector('.section__image_front');
const imgArr = [backImg, frontImg];

const windowHeight = window.innerHeight;
const elementVisible = 300;

imgArr.forEach((el) => {
	function scrollAnim() {
		let elementTop = frontImg.getBoundingClientRect().top;
		if (elementTop < windowHeight - elementVisible) {
			if (el == backImg) {
				el.classList.add("scroll-back");
			}
			if (el == frontImg) {
				el.classList.add("scroll-front");
			}
		} else {
			el.classList.remove("scroll-back");
			el.classList.remove("scroll-front");
		}
	}
	window.addEventListener('scroll', scrollAnim);
});
