let config = {};
let currentDayIndex = 0;
let isMusicPlaying = false;
const bgMusic = document.getElementById('bgMusic');

// DOM Elements
const menuScreen = document.getElementById('menuScreen');
const dayScreen = document.getElementById('dayScreen');
const dayGrid = document.getElementById('dayGrid');
const recipientNameDisplay = document.getElementById('recipientNameDisplay');
const musicControl = document.getElementById('musicControl');

// Day View Elements
const dayTitle = document.getElementById('dayTitle');
const daySubtitle = document.getElementById('daySubtitle');
const dayMessage = document.getElementById('dayMessage');
const visualContainer = document.getElementById('visualContainer');
const dotsIndicator = document.getElementById('dotsIndicator');

// Init
async function init() {
    try {
        const response = await fetch('config.json');
        config = await response.json();

        setupApp();
    } catch (error) {
        console.error("Failed to load config:", error);
    }
}

function setupApp() {
    // Set Recipient Name
    recipientNameDisplay.textContent = config.recipientName;

    // Setup Audio
    if (config.audioPath) {
        bgMusic.src = config.audioPath;
    }

    // Generate Grid
    config.days.forEach((day, index) => {
        const card = document.createElement('div');
        card.className = 'day-card';
        card.innerHTML = `
            <span class="day-card-icon">${day.icon}</span>
            <div class="day-card-title">${day.title}</div>
            <div class="day-card-date">${day.date}</div>
        `;
        card.addEventListener('click', () => openDay(index));
        dayGrid.appendChild(card);

        // Dot indicator
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.addEventListener('click', () => openDay(index));
        dotsIndicator.appendChild(dot);
    });

    // Event Listeners
    document.getElementById('backBtn').addEventListener('click', showMenu);
    document.getElementById('prevDayBtn').addEventListener('click', () => navigate(-1));
    document.getElementById('nextDayBtn').addEventListener('click', () => navigate(1));

    musicControl.addEventListener('click', toggleMusic);
}

function toggleMusic() {
    if (isMusicPlaying) {
        bgMusic.pause();
        musicControl.style.opacity = '0.5';
    } else {
        bgMusic.play().catch(e => console.log("Audio play failed (interaction needed first):", e));
        musicControl.style.opacity = '1';
    }
    isMusicPlaying = !isMusicPlaying;
}

function openDay(index) {
    currentDayIndex = index;
    updateDayView();

    // Transition
    gsap.to(menuScreen, {
        opacity: 0, duration: 0.5, onComplete: () => {
            menuScreen.classList.add('hidden');
            menuScreen.classList.remove('active');

            dayScreen.classList.remove('hidden');
            dayScreen.classList.add('active');
            gsap.fromTo(dayScreen, { opacity: 0 }, { opacity: 1, duration: 0.5 });
        }
    });
}

function showMenu() {
    gsap.to(dayScreen, {
        opacity: 0, duration: 0.5, onComplete: () => {
            dayScreen.classList.add('hidden');
            dayScreen.classList.remove('active');

            menuScreen.classList.remove('hidden');
            menuScreen.classList.add('active');
            gsap.fromTo(menuScreen, { opacity: 0 }, { opacity: 1, duration: 0.5 });
        }
    });

    // Stop any floats
    killAnimations();
}

function navigate(direction) {
    let newIndex = currentDayIndex + direction;
    if (newIndex < 0) newIndex = config.days.length - 1;
    if (newIndex >= config.days.length) newIndex = 0;

    currentDayIndex = newIndex;

    // Animate out current content
    gsap.to('.content-wrapper', {
        x: -50 * direction, opacity: 0, duration: 0.3, onComplete: () => {
            updateDayView();
            gsap.fromTo('.content-wrapper', { x: 50 * direction, opacity: 0 }, { x: 0, opacity: 1, duration: 0.3 });
        }
    });
}

function updateDayView() {
    const data = config.days[currentDayIndex];

    // Update Text
    dayTitle.style.color = data.themeColor;
    dayTitle.textContent = data.title;
    daySubtitle.textContent = data.subtitle;
    dayMessage.innerHTML = data.message;

    // Update Visuals
    visualContainer.innerHTML = `<div style="font-size: 8rem;">${data.icon}</div>`;

    // Update Dots
    document.querySelectorAll('.dot').forEach((dot, idx) => {
        if (idx === currentDayIndex) dot.classList.add('active-dot');
        else dot.classList.remove('active-dot');
    });

    // Background Color Tint
    document.body.style.backgroundColor = hexToRgba(data.themeColor, 0.1);
    document.body.style.transition = 'background-color 1s ease';

    // Trigger Floating Animation
    createFloatingElements(data.icon, data.themeColor);
}

// Visual Effects
let animationInterval;

function createFloatingElements(icon, color) {
    killAnimations();

    // specific visual effects logic could go here
    // for now, we just float the current icon around

    const container = document.querySelector('.app-container');

    animationInterval = setInterval(() => {
        const el = document.createElement('div');
        el.className = 'floater';
        el.textContent = icon;
        el.style.fontSize = Math.random() * 2 + 1 + 'rem';
        el.style.left = Math.random() * 100 + 'vw';
        el.style.top = '100vh';
        container.appendChild(el);

        gsap.to(el, {
            y: -window.innerHeight - 100,
            x: (Math.random() - 0.5) * 200,
            rotation: Math.random() * 360,
            duration: Math.random() * 5 + 5,
            ease: 'power1.out',
            onComplete: () => el.remove()
        });
    }, 800);
}

function killAnimations() {
    if (animationInterval) clearInterval(animationInterval);
    document.querySelectorAll('.floater').forEach(el => el.remove());
}

// Helper
function hexToRgba(hex, alpha) {
    let r = 0, g = 0, b = 0;
    if (hex.length == 4) {
        r = "0x" + hex[1] + hex[1];
        g = "0x" + hex[2] + hex[2];
        b = "0x" + hex[3] + hex[3];
    } else if (hex.length == 7) {
        r = "0x" + hex[1] + hex[2];
        g = "0x" + hex[3] + hex[4];
        b = "0x" + hex[5] + hex[6];
    }
    return "rgba(" + +r + "," + +g + "," + +b + "," + alpha + ")";
}

// Start
init();
