document.documentElement.classList.add("js-enabled");

const audios = new Map();
const aAudios = document.querySelectorAll("audio");
const aKeys = document.querySelectorAll(".key");

for (const eAudio of aAudios) {
    audios.set(eAudio.dataset.key, eAudio);
}

for (const eKey of aKeys) {
    eKey.addEventListener("transitionend", (event)=>{
        event.currentTarget.classList.remove("playing");
        document.body.className = "";
    })
}
// console.log(audios);
// console.log(audios.has("q"));
document.addEventListener("keydown", (event)=>{
    if (audios.has(event.key)){
        audios.get(event.key).play();
        document.body.className = event.key;
        document.querySelector(`[data-key="${event.key}"]`).classList.add(`playing`);
        // console.log(document.querySelector(`[data-key="${event.key}"]`));
    }
})



