import Player from '@vimeo/player';
import _ from 'lodash';
import throttle from 'lodash.throttle';

const MyvideoEl = document.getElementById('vimeo-player');
const player = new Player(MyvideoEl);

player.on(
  'timeupdate',
  _.throttle(() => {
    localStorage.setItem('videoplayer-current-time', player.getCurrentTime());
  }, 1000)
);

const storedTime = localStorage.getItem('videoplayer-current-time');
if (storedTime) {
  player.setCurrentTime(storedTime);
}
