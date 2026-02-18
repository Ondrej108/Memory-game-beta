# Memory Game 🎮🃏

A fun and interactive memory card matching game built with vanilla JavaScript, HTML5, and CSS3. Test your memory skills by matching pairs of cards before time runs out! This project features bilingual support (English/Czech) and a clean, modern interface.

**Live Demo**: https://ondrej108.github.io/Memory-game/

---

## 📋 Table of Contents
- [Technologies Used](#technologies-used)
- [Features](#features)
- [How to Play](#how-to-play)
- [How to Run](#how-to-run)
- [Project Structure](#project-structure)
- [Browser Compatibility](#browser-compatibility)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🛠️ Technologies Used

- **HTML5** - Modern semantic HTML structure
- **CSS3** - Advanced styling with:
  - **Flexbox** - For flexible component alignment
  - **CSS Custom Properties (Variables)** - For consistent theming
  - **Media Queries** - For responsive design
  - **CSS Animations** - For smooth card flip effects
- **Vanilla JavaScript** - Game logic and interactivity
  - DOM manipulation
  - Event handling
  - Timer functionality
  - Dynamic content rendering
- **Google Fonts** - Bubblegum Sans, Inter, and Roboto font families
- **Pure HTML/CSS/JavaScript** - No frameworks or libraries required

---

## ✨ Features

### ✅ Interactive Gameplay
- 10 unique card pairs (20 cards total)
- Card flip animations with smooth transitions
- Match detection and validation
- Win/lose game states

### ✅ Timer Challenge
- 2-minute countdown timer
- Real-time timer display
- Game ends when timer reaches zero
- Visual feedback for time remaining

### ✅ Bilingual Support
- **English (EN)** - Default language
- **Czech (CZ)** - Full translation support
- Language switcher in header
- Dynamic content translation without page reload

### ✅ Game Controls
- **Start Game** - Begin a new game session
- **Reset Game** - Clear the board and restart anytime
- Responsive button interactions
- Clear visual feedback

### ✅ Responsive Design
- **Desktop-optimized** interface
- Clean and modern UI design
- Intuitive card layout
- Mobile-friendly (beta support)

### ✅ Modern CSS Features
- Card flip animations using CSS transforms
- Smooth transitions and hover effects
- Clean, organized CSS structure split across multiple files
- SEO-optimized with robots.txt

---

## 🎮 How to Play

1. **Start the Game**
   - Click the **Start Game** button to begin
   - Cards will be shuffled and placed face-down on the board
   - The 2-minute timer starts counting down

2. **Match the Pairs**
   - Click on any card to reveal its image
   - Click on a second card to try to find a match
   - If the two cards match, they stay revealed
   - If they don't match, they flip back face-down

3. **Win the Game**
   - Find all 10 pairs before the timer runs out
   - Complete the challenge to win!

4. **Reset Anytime**
   - Click **Reset Game** to start over at any time
   - Timer resets to 2 minutes
   - Cards are reshuffled

5. **Switch Languages**
   - Use the language selector in the header
   - Choose between English (EN) and Czech (CZ)
   - All text updates dynamically

---

## 🚀 How to Run

This is a static web application, making it simple to run locally or deploy online.

### Option 1: Open Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Ondrej108/Memory-game.git
   ```

2. **Navigate to the project folder**:
   ```bash
   cd Memory-game
   ```

3. **Open in browser**:
   - Simply double-click `index.html`, or
   - Right-click `index.html` → Open with → Your browser

### Option 2: Use a Local Server (Recommended)

Using a local server provides a better development experience:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server package)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

### Option 3: Deploy Online

**GitHub Pages** (Free and Easy):
1. Go to your repository settings
2. Navigate to "Pages" section
3. Select the `main` branch as source
4. Your site will be live at `https://ondrej108.github.io/Memory-game/`

**Other Options**:
- Netlify
- Vercel
- Cloudflare Pages
- Any static hosting service

---

## 📁 Project Structure

```
Memory-game/
├── index.html          # Main HTML structure and game board
├── style.css           # Main stylesheet with layout and animations
├── media.css           # Media queries and responsive styles
├── translation.css     # Translation-specific styles
├── script.js           # Core game logic and functionality
├── translation.js      # Language translation functionality
├── robots.txt          # SEO configuration for search engines
├── img/                # Game card images (10 unique pairs)
│   ├── card1.jpg
│   ├── card2.jpg
│   └── ...
└── img2/               # Additional UI images and assets
```

---

## 🌐 Browser Compatibility

This game is compatible with all modern browsers:

- ✅ **Chrome** (recommended) - Version 90+
- ✅ **Firefox** - Version 88+
- ✅ **Safari** - Version 14+
- ✅ **Edge** - Version 90+
- ✅ **Opera** - Version 76+

### Requirements
- JavaScript must be enabled
- Modern browser with ES6 support
- Recommended screen resolution: 1024x768 or higher for desktop

### Known Limitations
- **Beta version** - Primarily optimized for desktop screens
- Mobile responsiveness may be limited in some areas
- Some older browsers may not support all CSS animations

---

## 🎯 Future Improvements

Planned enhancements for upcoming versions:

- [ ] **Full Mobile Responsiveness** - Optimize for all screen sizes
- [ ] **Difficulty Levels** - Easy (6 pairs), Medium (10 pairs), Hard (15 pairs)
- [ ] **High Score System** - Track and display best times
- [ ] **Local Storage** - Save scores and preferences
- [ ] **Sound Effects** - Audio feedback for matches, flips, and wins
- [ ] **Enhanced Animations** - More engaging visual effects
- [ ] **Multiple Themes** - Different card sets (animals, nature, flags, etc.)
- [ ] **Multiplayer Mode** - Two-player competitive gameplay
- [ ] **Statistics** - Track moves, accuracy, and game history
- [ ] **Accessibility** - Keyboard navigation and screen reader support
- [ ] **Progressive Web App** - Install and play offline

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. **Fork the project**
2. **Create your feature branch**:
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**:
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**:
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 📧 Contact

**Ondrej108**

- GitHub: [@Ondrej108](https://github.com/Ondrej108)
- Project Link: [https://github.com/Ondrej108/Memory-game](https://github.com/Ondrej108/Memory-game)

---

⭐ **If you like this project, please give it a star!** ⭐