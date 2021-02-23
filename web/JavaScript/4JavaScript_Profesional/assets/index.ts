import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay";
import AutoPause from "./plugins/AutoPause";
import Ads from "./plugins/Ads";
import "regenerator-runtime/runtime";

const video = document.querySelector("video");
const button1: HTMLElement = document.getElementById("button1");
const button2: HTMLElement = document.getElementById("button2");
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause(), new Ads()],
});

button1.onclick = () => player.togglePlay();
button2.onclick = () => player.toggleMute();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("../sw.js").catch((error) => {
    console.log(error.message);
  });
}
