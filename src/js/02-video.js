import Player from '@vimeo/player';
import loDash from 'lodash.throttle';
const player = new Player('vimeo-player', {});

if (localStorage.getItem('videoplayer-current-time') === null) {
  localStorage.setItem('videoplayer-current-time', 0);
}

const saveTime = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};

player.on('timeupdate', loDash(saveTime, 1000));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
