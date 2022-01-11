'use strict';
let accItem = document.querySelectorAll('.course__item');
let accHeading = document.querySelectorAll('.course__heading');

accHeading.forEach(
    function getClick(el) {
        el.addEventListener('click', toggleItem);
    }
);

function toggleItem() {
    let itemClass = this.parentNode.classList;
    if (itemClass.contains('course__item_open')) {
        this.parentNode.classList.remove('course__item_open');     
        this.parentNode.classList.add('course__item_close');     
    }
    else {
        accItem.forEach(
            function closeIt(it) {
                it.classList.remove('course__item_open');
                it.classList.add('course__item_close');
            }
        );
        this.parentNode.classList.remove('course__item_close'); 
        this.parentNode.classList.add('course__item_open'); 
    }
}
