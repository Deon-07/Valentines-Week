# 💖 Valentine's Week - A Journey of Love

A beautiful, interactive web experience designed to celebrate Valentine's Week with your special someone. From Rose Day to Valentine's Day, each day unlocks a unique, personalized message wrapped in stunning animations.

## ✨ Features

- **🗓️ 8-Day Journey**: Automatically updates content based on the current date (Feb 7 - Feb 14).
- **🎈 Physics-Based Animations**: Floating icons (hearts, balloons, gifts) that bounce, drift, and interact naturally.
- **📱 Mobile Optimized**: Responsive design with adaptive countdown timers and touch-friendly interactions.
- **🎵 Magical Audio**:
  - Auto-playing background music with consent handling.
  - Day-specific tracks (Rose Day music, Propose Day music, etc.).
  - Default "Coming Soon" styling and music for dates outside the week.
- **💌 Interactive Surprises**:
  - **Teddy Day**: A magical, glowing gift box that shakes and reveals a teddy when tapped. `[New]`
  - **Propose Day**: A "Yes/No" proposal with grand celebrations (fireworks + hearts rain). `[New]`
  - **Valentine's Day**: A "Forever Valentine" finale with a heartfelt letter modal.
- **🎨 Custom Assets**: Includes specialized SVGs for Chocolate Day (`chocolate.svg`) and Propose Day (`ring.svg`).

## 🚀 How to Use

1. **Clone the Repo**:

    ```bash
    git clone https://github.com/Deon-07/ValentineWeek.git
    cd ValentineWeek
    ```

2. **Customize (`config.js`)**:
    Open `config.js` and update:
    - `recipientName`: Your partner's name.
    - `days`: Customize messages, quotes, and memories for each day.
    - `musicList`: Add your own mp3 files to `assets/music/` if desired.

3. **Run Locally**:
    Just open `index.html` in your browser! No build process required.

## 🛠️ Tech Stack

- **HTML5 / CSS3**: Modern styling with glassmorphism and animations.
- **JavaScript (ES6+)**: Logic for date handling, state management, and interactions.
- **GSAP (GreenSock)**: Powerful animations for smooth transitions.
- **FontAwesome**: For UI icons.

## 📂 Project Structure

```
ValentineWeek/
├── assets/
│   ├── music/       # Day-specific audio files
│   └── svgs/        # Custom icons (chocolate, rings, hearts)
├── css/
│   └── style.css    # Centralized styles
├── js/
│   └── main.js      # Core logic (animations, state, physics)
├── config.js        # Easy-to-edit configuration file
├── index.html       # Main entry point
└── README.md        # Documentation
```

## 📸 Screenshots

*(Add your screenshots here)*

---

Made with ❤️ by [Deon-07](https://github.com/Deon-07)
