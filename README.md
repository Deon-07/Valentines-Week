# Valentine's Week Journey 💕

A magical, interactive web experience to celebrate the 8 days of Valentine's Week. Surprise your special someone with a personalized digital gift featuring animations, music, and memories.

[**See it Live**](https://Deon-07.github.io/ValentineWeek)

## ✨ Features

- **8 Days of Content**: From Rose Day to Valentine's Day.
- **Interactive Storytelling**: Typing effects, animations, and transitions.
- **Customizable**: Easily change names, messages, music, and images.
- **Music Player**: Plays romantic tunes (customizable per day).
- **Responsive**: Works on mobile and desktop.
- **Real-time Mode**: Option to lock days until the actual date arrives.

---

## 🚀 How to Make Your Own Version

### Step 1: Fork the Repository

1. Click the **Fork** button at the top right of this page.
2. This creates a copy of the project in your own GitHub account.

### Step 2: Customize Key Details

You can edit the configuration directly on GitHub without downloading anything!

1. Open `config.js` in your forked repository.
2. Click the ✏️ (Edit) icon.
3. Update the following values:
   - `recipientName`: Your partner's name.
   - `year`: The year (e.g., 2026) to display in the footer.
   - `floatingIcons`: Change the background icons if you wish.
   - `musicList`: Add your own music URLs.
   - **Daily Messages**: Scroll down to the `days` array and edit the `message`, `quote`, and `memories` for each day.

### Step 3: Enable GitHub Pages (Deploy)

1. Go to your repository **Settings**.
2. Click on **Pages** in the left sidebar.
3. Under **Build and deployment** > **Source**, select `Deploy from a branch`.
4. Select `main` branch and `/ (root)` folder.
5. Click **Save**.
6. Wait a minute, then refresh. You will see your live URL (e.g., `https://your-username.github.io/ValentineWeek`).
7. Send this Link to your Valentine! 💌

---

## ⚙️ Advanced Settings

### Real-time Mode (Date Locking)

By default, the site allows viewing all days immediately (so you can test it).
To make it "Real-time" (where days only unlock on their specific dates, e.g., Rose Day unlocks on Feb 7):

1. Open `index.html`.
2. Find the line:

   ```javascript
   let isDateLocked = false;
   ```

3. Change it to:

   ```javascript
   let isDateLocked = true;
   ```

4. Commit the changes. Now your partner can only open the days that have arrived!

---

## 💻 Running Locally (Optional)

If you want to edit on your computer:

1. Clone the repo: `git clone https://github.com/Deon-07/ValentineWeek.git`
2. Open `index.html` in your browser.
3. To view changes, refresh the page.

---

## ❤️ Credits

- Animations & Original Concept: **Deon_07** / **Afiur Rahman Fahim (faahim)**
- Customization & Enhancements: [Your Name]

Stay happy and spread love! :)
