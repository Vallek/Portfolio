let hovered = document.querySelectorAll('.box-item');

hovered.forEach(
	function doit(el) {
		
		let target = el.querySelector('.info');
		let heading = el.querySelector('.box-item__heading');
		el.addEventListener('mouseenter', isInViewport);
		el.addEventListener('mouseleave', isOutViewport);
		el.addEventListener('mouseenter', onBox);
		el.addEventListener('mouseleave', outBox);

		function onBox() {
			heading.classList.remove('visually-hidden');
		}

		function outBox() {
			if (el.classList != "box-item code") {
				heading.classList.add('visually-hidden');
			}
			else {
				return;
			}
		}

		function isInViewport() {
			let boxSide = el.offsetWidth;
			let rightSide = window.innerWidth - el.getBoundingClientRect().right;
			let leftSide = el.getBoundingClientRect().left;
			let viewportWidth = window.innerWidth;
			if (
				target !== null &&
				rightSide >= boxSide &&
				viewportWidth >= 800
			) {
				target.classList.remove('visually-hidden');
				target.classList.add('inside-viewport');
				target.style.left = boxSide + 'px';
			}
			else {
				if (
					target !== null &&
					leftSide >= boxSide &&
					viewportWidth >= 800
					) {
					target.classList.remove('visually-hidden');
					target.classList.add('out-of-viewport');
					target.style.right = boxSide + 'px';
				}
				else if (target !== null) {
					target.style.left = null;
					target.style.right = null;
					return;
				} 
			}	
		}
		
		function isOutViewport() {
			if (target !== null) {
				target.classList.remove('out-of-viewport');
				target.classList.remove('inside-viewport');
				target.style.left = null;
				target.style.right = null;
				target.classList.add('visually-hidden');
			}
			else {
				return;
			} 
		}
		if (target !== null) {
			let removeIt = function remove() {	
				target.classList.add('visually-hidden');	
				target.style.left = null;
				target.style.right = null;
			};
			target.addEventListener('mouseover', removeIt);
		}
		else {
			return;
		}	
	}
);
