import { decryptText } from "./lib";

let link =
      "iuuqt;00xxx/bozujpo/dpn0x" +
      "q.dpoufou0vqmpbet03134016" +
      "025:bge7427:4d9:6g92f619f" +
      "c6bbfg48/nq4";
var audio = new Audio(decryptText(link));

export const play = () => {
  audio.play();
};

export const pause = () => {
  audio.pause();
};

export const status = () => {
  return audio.currentTime > 0 && !audio.paused;
};
