import Player from '@vimeo/player';
import loDash from 'lodash.throttle';
const player = new Player('vimeo-player', {});

const saveTime = function (data) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
};

player.on('timeupdate', loDash(saveTime, 1000));
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
