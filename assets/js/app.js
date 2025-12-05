const dynamicText = document.querySelector('.typing-text');
const cursor = document.querySelector('.cursor');

const phrases = ["I build things for the web",
    "Full Stack Developer",
    "Problem Solver",
    "Building scalable web apps",
    "Crafting digital experiences",
    "Building, breaking, fixing, repeat"];
let phraseIndex = 0;
let letterIndex = 0;

function type() {
    if (letterIndex < phrases[phraseIndex].length) {
        dynamicText.textContent += phrases[phraseIndex].charAt(letterIndex);
        letterIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 1500);
    }
}

function erase() {
    if (letterIndex > 0) {
        dynamicText.textContent = phrases[phraseIndex].substring(0, letterIndex - 1);
        letterIndex--;
        setTimeout(erase, 70);
    } else {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, 500);
    }
}

window.onload = setTimeout(type, 500);