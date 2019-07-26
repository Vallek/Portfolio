var button = document.querySelectorAll('.question-button');

button.forEach(
	function buttonHover(inf) {
		inf.addEventListener('mouseover', getPopup);
		inf.addEventListener('mouseover', showToolTip);
		inf.addEventListener('mouseout', hideToolTip);
		inf.addEventListener('mouseover', moveToolTip);
	}
);

function getPopup(evt) {
	var target = evt.target;
	var parent = target.parentElement.id;
	var selector = document.querySelector('#' + parent);
	popup = selector.querySelector(':nth-child(2)');	
}

function showToolTip() {
	popup.classList.add('show');
}

function hideToolTip() {
	popup.classList.remove('show');
}

function moveToolTip() {
	var bounding = popup.getBoundingClientRect();
	var topCoor = bounding.top;
	var bottomCoor = bounding.bottom;
	var isVisible = (topCoor >= 0) && (bottomCoor <= window.innerHeight);
	if (isVisible) {
		return;
	}
	else {
		popup.classList.toggle('tooltip-in-viewport');
	}	
}
