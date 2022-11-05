import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// console.log(Player);

const PLAYER_CURRENT_TIME = 'videoplayer-current-time';
const memoryTime = localStorage.getItem(PLAYER_CURRENT_TIME);
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe); 

if (memoryTime) {
    player.setCurrentTime(memoryTime);
};

player.on('timeupdate', throttle(onTimeUpdate, 1000))

function onTimeUpdate(event) { 
    const time = event.seconds;
    localStorage.setItem(PLAYER_CURRENT_TIME, time);
};