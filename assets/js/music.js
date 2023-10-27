document.addEventListener("DOMContentLoaded", function () {
    const bgMusic = document.getElementById("bgMusic");
    const musicToggle = document.getElementById("musicToggle");
    let isMusicPlaying = false;

    function toggleMusic() {
        if (isMusicPlaying) {
            bgMusic.pause();
            musicToggle.innerHTML = '<span>Play Music</span>';
        } else {
            bgMusic.play();
            musicToggle.innerHTML = '<span>Pause Music</span>';
        }
        isMusicPlaying = !isMusicPlaying;
    }

    // Event listener for the music toggle button
    musicToggle.addEventListener("click", toggleMusic);

    // Ensure the button reflects the current state of the music
    bgMusic.addEventListener("play", function () {
        isMusicPlaying = true;
        musicToggle.innerHTML = '<span>Pause Music</span>';
    });

    bgMusic.addEventListener("pause", function () {
        isMusicPlaying = false;
        musicToggle.innerHTML = '<span>Play Music</span>';
    });
});
