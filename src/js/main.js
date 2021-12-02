(function (){
    const oDrum = {
        init(){
            document.documentElement.classList.add("js-enabled");

            this.audios = new Map();
            this.aAudios = document.querySelectorAll("audio");
            this.aKeys = document.querySelectorAll(".key");

            for (const eAudio of this.aAudios) {
                this.audios.set(eAudio.dataset.key, eAudio);
            }
            this.addEventListener()
        },
        addEventListener (){
            for (const eKey of this.aKeys) {
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
                this.playSound(event.key);
            })
        },
        playSound(key){
            if (this.audios.has(key)){
                this.audios.get(key).currentTime = 0;
                this.audios.get(key).play();
                document.body.className = key;
                document.querySelector(`[data-key="${key}"]`).classList.add(`playing`);
                // console.log(document.querySelector(`[data-key="${event.key}"]`));
            }
        }
    }
    oDrum.init();
})();





