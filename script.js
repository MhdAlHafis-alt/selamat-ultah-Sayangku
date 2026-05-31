const audio = new Audio('lagu.mp3');
let isPlaying = false;
const btn = document.getElementById('musicBtn');

if(btn) {
    btn.addEventListener('click', () => {
        if (!isPlaying) {
            audio.play();
            btn.innerText = "Pause Musik ⏸️";
            isPlaying = true;
        } else {
            audio.pause();
            btn.innerText = "Putar Musik 🎵";
            isPlaying = false;
        }
    });
}