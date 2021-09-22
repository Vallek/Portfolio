// Get items
let boxItems = document.querySelectorAll('.box-item');

boxItems.forEach(
	function changeOnHover(el) {

		// Get popups
		let infoPopup = el.querySelector('.info');

		// Get headings and items that must always show heading
		let heading = el.querySelector('.box-item__heading');
		let itsCode = el.classList.contains("always-show");

		// Show/hide popups on hover and focus
		el.addEventListener('mouseenter', showPopup);
		el.addEventListener('mouseleave', hidePopup);
		el.addEventListener('focusin', showPopup);
		el.addEventListener('focusout', hidePopup);

		// Show/hide headings on hover
		el.addEventListener('mouseenter', onBox);
		el.addEventListener('mouseleave', outBox);

		// Hide popups on self hover
		if (infoPopup !== null) {
			infoPopup.addEventListener('mouseover', removeIt);
		}
		function removeIt() {	
			infoPopup.classList.add('visually-hidden');	
			infoPopup.style.transform = null;
			infoPopup.style.transform = null;
		}

		// Show heading on items links focus
		let boxLink = el.querySelector('.box-item__image-link');
		boxLink.addEventListener('focus', onBox);
		boxLink.addEventListener('focusout', outBox);
		
		// Show/hide headings on source links focus
		let boxHeadingLink = el.querySelector('.caption-link');
		if (! itsCode &&
			boxHeadingLink != null) {
				boxHeadingLink.addEventListener('focus', onBox);
				boxHeadingLink.addEventListener('focusout', outBox);
			}
		else {
			return;
		}
		
		// Shows headings
		function onBox() {
			if (! itsCode) {
				heading.classList.remove('visually-hidden');
			}
			else {
				return;
			}
		}

		// Hides headings
		function outBox() {
			if (! itsCode) {
				heading.classList.add('visually-hidden');
			}
			else {
				return;
			}
		}

		// Shows popups
		function showPopup() {
			el.style.zIndex = '2';
			let viewportWidth = window.innerWidth;
			let rightSide = viewportWidth - el.getBoundingClientRect().right;
			let leftSide = el.getBoundingClientRect().left;
			if (
				infoPopup !== null &&
				rightSide >= 300 &&
				viewportWidth >= 800
				) {
					let boxSide = el.offsetWidth;
					infoPopup.classList.remove('visually-hidden');
					infoPopup.classList.add('inside-viewport');
					infoPopup.style.transform = 'translate(' + boxSide + 'px)';
			}
			else if (
				infoPopup !== null &&
				leftSide >= 300 &&
				viewportWidth >= 800
				) {
					infoPopup.classList.remove('visually-hidden');
					infoPopup.classList.add('out-of-viewport');
					infoPopup.style.transform = 'translate(-100%)';
			}
			else if (infoPopup !== null) {
				infoPopup.style.transform = null;
				return;
			} 
		}	
		
		// Hides popups
		function hidePopup() {
			el.style.zIndex = null;
			if (infoPopup !== null) {
				infoPopup.classList.remove('out-of-viewport');
				infoPopup.classList.remove('inside-viewport');
				infoPopup.style.transform = null;
				infoPopup.classList.add('visually-hidden');
			}
			else {
				return;
			} 
		}
	}
);
