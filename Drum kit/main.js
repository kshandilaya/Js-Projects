document.querySelectorAll('.drum').forEach(btn => {
    btn.addEventListener('click', function () {
        const key = this.dataset.key;
        playSound(key);
        animate(key);
    });
});
document.addEventListener('keydown', function (event) {
    playSound(event.key);
    animate(event.key);
});
function playSound(key) {
    let soundFile;
    switch (key) {
        case 'w': soundFile = 'sounds/crash.wav'; break;
        case 'a': soundFile = 'sounds/kick.wav'; break;
        case 's': soundFile = 'sounds/snare.wav'; break;
        case 'd': soundFile = 'sounds/tom1.wav'; break;
        case 'j': soundFile = 'sounds/tom2.wav'; break;
        case 'k': soundFile = 'sounds/tom3.wav'; break;
        case 'l': soundFile = 'sounds/tom4.wav'; break;
        default: return;
    }
    new Audio(soundFile).play();
}
function animate(key) {
    const activeBtn = document.querySelector(`.drum[data-key="${key}"]`);
    if (!activeBtn) return;
    activeBtn.classList.add('pressed');
    setTimeout(() => activeBtn.classList.remove('pressed'), 100);
}
