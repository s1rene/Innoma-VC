export function initVideo() {
    const video = document.getElementById("myVideo");
    const button = document.querySelector(".play-button");
    const overlay = document.querySelector(".overlay");

    function togglePlay(event) {
        event.preventDefault();
        event.stopPropagation();

        if (video.paused) {
            video.play();
            overlay.classList.add("hidden");
            button.style.display = "none";
            localStorage.setItem("videoPlayed", "true");
        } else {
            video.pause();
            overlay.classList.remove("hidden");
            button.style.display = "flex";
            localStorage.setItem("videoPlayed", "false");
        }
    }

    video.addEventListener("pointerdown", togglePlay);
    button.addEventListener("pointerdown", togglePlay);

    video.addEventListener("ended", () => {
        button.style.display = "flex";
        overlay.classList.remove("hidden");
        localStorage.setItem("videoPlayed", "false");
    });

}

