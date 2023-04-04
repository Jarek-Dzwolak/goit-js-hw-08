import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const MyvideoEl = document.getElementById('vimeo-player');
const player = new Player(MyvideoEl);

player.on(
  'timeupdate',
  throttle(data => {
    localStorage.setItem('videoplayer-current-time', data.seconds);
  }, 1000)
);

const storedTime = localStorage.getItem('videoplayer-current-time');
if (storedTime) {
  player.setCurrentTime(storedTime).then();
}
