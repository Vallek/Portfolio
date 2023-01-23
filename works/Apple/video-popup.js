const playButton = document.querySelectorAll('.play-button');

playButton.forEach(
    function name(item) {
        item.addEventListener('click', showVideo);
    }
);

function showVideo(item) {
    let thisClass = item.target.classList[1];
    let video = document.querySelector('.' + thisClass);
    video.parentElement.classList.add('show');
    video.classList.add('show');
}

const outsideVideo = document.querySelector('.video-wrap');

outsideVideo.addEventListener('click', closeVideo);
function closeVideo() {
    let video = document.querySelector('.tip-video.show');
    video.pause();
    video.parentElement.classList.remove('show'); 
    video.classList.remove('show');
}
