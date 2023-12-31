
      function playSound(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        if (!audio) return; //stop the function from running altogether
        audio.currentTime = 0; // rewind the soundclip to the start
        audio.play();
        key.classList.add("playing");
        console.log(audio);
      }

      function removeTransition(e) {
        if (e.propertyName !== "transform") return; // skip if it's not a transform
        console.log(e.propertyName);
        this.classList.remove("playing");
      }

      const keys = document.querySelectorAll(".key");
      keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
      window.addEventListener("keydown", playSound);

