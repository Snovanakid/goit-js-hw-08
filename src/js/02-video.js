import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const currentTimeString = localStorage.getItem('videoplayer-current-time');

if (currentTimeString) {
    player.setCurrentTime(JSON.parse(currentTimeString));
}

player.on('timeupdate', throttle(function(data) {
    localStorage.setItem('videoplayer-current-time', data.seconds)
}, 1000));