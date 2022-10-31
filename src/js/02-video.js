
import Player from '@vimeo/player';

const player = new Player('vimeo-player', {

});

player.on('timeupdate', function(time) {
    console.log(time);
});