(function (){
    const oDrum = {
        init(){
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
                });
                eKey.addEventListener("click", (event)=>{
                    playSound(event.currentTarget.dataset.key);
                })
            }
// console.log(audios);
// console.log(audios.has("q"));
            document.addEventListener("keydown", (event)=>{
                playSound(event.key);
            })
            function playSound(key){
                if (audios.has(key)){
                    audios.get(key).currentTime = 0;
                    audios.get(key).play();
                    document.body.className = key;
                    document.querySelector(`[data-key="${key}"]`).classList.add(`playing`);
                    // console.log(document.querySelector(`[data-key="${event.key}"]`));
                }
            }
        }
    }
    oDrum.init();
})();





