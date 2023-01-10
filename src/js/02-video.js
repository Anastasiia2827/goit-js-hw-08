import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeElement = document.querySelector('#vimeo-player');
const player = new Player(iframeElement);
const currentTime = 'videoplayer-current-time';

player.on('timeupdate', throttle(onPlay, 1000));
timeVimeo()

function onPlay({ seconds, duration }) {
    localStorage.setItem(currentTime, seconds);
    if (seconds === duration) {
        localStorage.removeItem(currentTime);
    }
}
function timeVimeo() {
    if (localStorage.getItem(currentTime)) {
        player.setCurrentTime(localStorage.getItem(currentTime));   
    }
}
