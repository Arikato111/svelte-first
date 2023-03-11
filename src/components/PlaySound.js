var audio = new Audio("/special.mp3");

export const play = () => {
  audio.play();
};

export const pause = () => {
  audio.pause();
};

export const status = () => {
  return audio.currentTime > 0 && !audio.paused;
};
