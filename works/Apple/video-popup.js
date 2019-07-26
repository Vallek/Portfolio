var playButton = document.querySelectorAll('.play-button');

playButton.forEach(
    function name(item) {
        item.addEventListener('click', showVideo)
    }
)

function showVideo(item) {
    thisClass = item.target.classList[1];
    video = document.querySelector('.' + thisClass);
    video.parentElement.style.display = 'block'; 
    video.style.display = 'block';
}

var outsideVideo = document.querySelector('.video-wrap');

outsideVideo.addEventListener('click', closeVideo);
function closeVideo() {
    video.pause();
    video.parentElement.style.display = 'none'; 
    video.style.display = 'none';
}
