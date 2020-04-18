let sliderButtons = document.querySelectorAll('[name="slider-button"]');

let firstSliderButton = document.querySelector('[name="slider-button"]');

let slides = document.querySelectorAll('.slide');

// let array = Array.from(sliderButtons);

let buttonsArray = [],
length = sliderButtons.length;

for (var i = 0; i < length; i++) {
	buttonsArray.push(sliderButtons[i]);
}

function slideClick() {
	for (i = 0; i < buttonsArray.length; i++) {
		buttonsArray[i].addEventListener('click', getSlide);
	}
}

slideClick();

function getSlide(item) {
	let thisButton = item.target;
	for (i = 0; i < thisButton.parentNode.length; i++) {
		if (thisButton.parentNode[i] == thisButton) {
			thisSlide = i;
		} 
	}
	let slidesArray = Array.prototype.slice.call(slides);
	let length = slidesArray.length;
	for (var i = 0; i < length; i++) {
		slidesArray.push(slides[i]);
	}
	for (i = 0; i < slides.length; i++) {
		if (i == thisSlide) {
			slides[i].classList.add('active-slide');
			slides[i].classList.remove('visually-hidden');

			// let slidesArray = Array.from(slides);

			slidesArray.filter(function(x) { 
				if (x !== slides[i]) {
					x.classList.remove('active-slide');
					x.classList.add('visually-hidden');
				}
			});
		} 
	}
}

// Filter
let minInput = document.querySelector('input[name="minPrice"]');
let maxInput = document.querySelector('input[name="maxPrice"]');
var currentMinValue = minInput.value;
var currentMaxValue = maxInput.value;

minInput.addEventListener('input', setMin);
maxInput.addEventListener('input', setMax);

function setMin(item) {
	var currentMinValue = item.target.value;
	maxInput.min = currentMinValue;
}

function setMax(item) {
	var currentMaxValue = item.target.value;
	minInput.max = currentMaxValue;
}






