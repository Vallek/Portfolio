'use strict';
// Get items
let boxItems = document.querySelectorAll('.box-item');

// Get items except those that always show headings
let doHeadings = document.querySelectorAll('.box-item:not(.always-show)');

// Handle popups
boxItems.forEach(
	function itemsPopups(el) {
		// Get popups
		let infoPopup = el.querySelector('.info');
		
		// Show/hide popups on hover and focus if item has popup
		if (infoPopup !== null) {
			el.addEventListener('mouseenter', showPopup);
			el.addEventListener('mouseleave', hidePopup);
			el.addEventListener('focusin', showPopup);
			el.addEventListener('focusin', zIndexUp);
			el.addEventListener('focusout', hidePopup);
		}
		else {
			return;
		}

		// Hide popups on self hover (disabled for accessibility)
		// if (infoPopup !== null) {
		// 	infoPopup.addEventListener('mouseover', removeIt);
		// }
		// function removeIt() {	
		// 	infoPopup.classList.add('visually-hidden');	
		// 	infoPopup.style.transform = null;
		// 	infoPopup.style.transform = null;
		// }

		// Shows popups
		function showPopup() {
			el.style.zIndex = '3';
			let viewportWidth = window.innerWidth;
			let rightSide = viewportWidth - el.getBoundingClientRect().right;
			let leftSide = el.getBoundingClientRect().left;
			if (rightSide >= 320 ) {
				let boxSide = el.offsetWidth;
				infoPopup.classList.remove('visually-hidden');
				infoPopup.classList.add('inside-viewport');
				infoPopup.style.transform = 'translate(' + boxSide + 'px)';
			}
			else if (leftSide >= 320) {
				infoPopup.classList.remove('visually-hidden');
				infoPopup.classList.add('out-of-viewport');
				infoPopup.style.transform = 'translate(-100%)';
			}
			else {
				infoPopup.style.transform = null;
				return;
			} 
		}	
		
		// Hides popups
		function hidePopup() {
			el.style.zIndex = null;
			infoPopup.classList.remove('out-of-viewport');
			infoPopup.classList.remove('inside-viewport');
			infoPopup.style.transform = null;
			infoPopup.classList.add('visually-hidden');
		}
		
		// Put focused items popups under hovered
		function zIndexUp() {
			el.style.zIndex = 2;
		}
	}
);

// Handle headings
doHeadings.forEach(
	function itemsHeading(el) {
		// Get headings
		let heading = el.querySelector('.box-item__heading');

		// Show/hide headings on hover
		el.addEventListener('mouseenter', onBox);
		el.addEventListener('mouseleave', outBox);

		// Show heading on items links focus
		let boxLink = el.querySelector('.box-item__image-link');
		boxLink.addEventListener('focus', onBox);
		boxLink.addEventListener('focusout', outBox);
		
		// Show/hide headings on source links focus
		let boxHeadingLink = el.querySelector('.caption-link');
		if (boxHeadingLink != null) {
				boxHeadingLink.addEventListener('focus', onBox);
				boxHeadingLink.addEventListener('focusout', outBox);
			}
		else {
			return;
		}
		
		// Shows headings
		function onBox() {
				heading.classList.remove('visually-hidden');
		}

		// Hides headings
		function outBox() {
				heading.classList.add('visually-hidden');
		}
	}
);