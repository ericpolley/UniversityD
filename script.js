// script.js
const gameContainer = document.querySelector('.game-container');
const background = document.querySelector('.background');
const assets = document.querySelector('.assets');
const character = document.querySelector('.character');

let backgroundPosition = 0;
let initialTouchX = null;
let previousTouchX = null;

// Initialize the background position when the script loads
updateElementsPosition();

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        backgroundPosition += 10; // Adjust the scrolling speed
    } else if (event.key === 'ArrowRight') {
        backgroundPosition -= 10;
    }

    updateElementsPosition();
});

document.addEventListener('touchstart', (event) => {
    initialTouchX = event.touches[0].clientX;
    previousTouchX = initialTouchX;
});

document.addEventListener('touchmove', (event) => {
    if (initialTouchX === null) {
        return;
    }

    const currentTouchX = event.touches[0].clientX;
    const touchDiff = currentTouchX - previousTouchX;

    backgroundPosition -= touchDiff;
    previousTouchX = currentTouchX;

    updateElementsPosition();
});

document.addEventListener('touchend', () => {
    initialTouchX = null;
    previousTouchX = null;
});

function updateElementsPosition() {
    background.style.backgroundPosition = `${backgroundPosition}px bottom`;
    assets.style.transform = `translateX(${backgroundPosition}px)`;
}

// You can also add more touch handling logic and customize the touch sensitivity
