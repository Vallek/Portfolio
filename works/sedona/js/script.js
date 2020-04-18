let searchForm = document.querySelector('.search-form');
searchForm.classList.add('visually-hidden');

let formButton = document.querySelector('.search-hotel-button');
formButton.addEventListener('click', showForm);

function showForm() {
	searchForm.classList.toggle('visually-hidden');
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