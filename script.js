// script.js
const gameContainer = document.querySelector('.game-container');
const background = document.querySelector('.background');
const assets = document.querySelector('.assets');
const character = document.querySelector('.character');

let backgroundPosition = 0;

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        backgroundPosition += 10; // Adjust the scrolling speed
    } else if (event.key === 'ArrowRight') {
        backgroundPosition -= 10;
    }

    background.style.backgroundPosition = `${backgroundPosition}px 0`;
    assets.style.transform = `translateX(${backgroundPosition}px)`;
});

// You can also add touch/swipe functionality for tablets
