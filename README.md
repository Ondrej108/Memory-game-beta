# Memory-game-beta 🎮🧠

An interactive memory card game built with pure HTML5, CSS3, and JavaScript. Test your memory by matching pairs of cards in this classic concentration game featuring a clean design, smooth animations, and multilingual support.

**Live Demo**: https://ondrej108.github.io/Memory-game-beta/

---

## 📋 Table of Contents
- [Technologies Used](#technologies-used)
- [Features](#features)
- [How to Run](#how-to-run)
- [Project Structure](#project-structure)
- [How to Play](#how-to-play)
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
  - **CSS Transitions** - For smooth card flip animations
  - **CSS Custom Properties (Variables)** - For consistent theming
  - **Media Queries** - For responsive design
- **JavaScript** - Game logic and interactivity
  - Card shuffling algorithm
  - Match detection system
  - Score and move tracking
  - Translation system for multilingual support
- **Pure HTML/CSS/JavaScript** - No frameworks or libraries required

---

## ✨ Features

### ✅ Classic Memory Game Mechanics
- Card matching gameplay
- Flip animations for card reveals
- Match detection system
- Move counter to track attempts
- Responsive game board

### ✅ Multilingual Support
- Built-in translation system (`translation.js`)
- Easy language switching
- Customizable language options via `translation.css`

### ✅ Responsive Design
- **Mobile-first approach** for optimal performance
- Adapts seamlessly to different screen sizes
- Touch-friendly for mobile devices
- Works on tablets and desktops

### ✅ Visual Elements
- Two image directories (`img/` and `img2/`) for card designs
- Smooth card flip animations
- Clean and modern UI design
- Visual feedback for matches and mismatches

### ✅ Game Features
- Random card shuffling for each game
- Score tracking system
- Move counter
- Restart/reset functionality
- Win condition detection

---

## 🚀 How to Run

This is a static website, making it simple to run locally or deploy online.

### Option 1: Open Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Ondrej108/Memory-game-beta.git
   ```

2. **Navigate to the project folder**:
   ```bash
   cd Memory-game-beta
   ```

3. **Open in browser**:
   - Simply double-click `index.html`, or
   - Right-click `index.html` → Open with → Your browser
   - Or use a local server (Live Server in VS Code, Python's http.server, etc.)

### Option 2: Deploy Online

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select the `main` branch as source
   - Save and wait for deployment

2. **Visit your live site** at:
   ```
   https://ondrej108.github.io/Memory-game-beta/
   ```

---

## 📁 Project Structure

```
Memory-game-beta/
├── index.html          # Main game page
├── script.js           # Game logic and functionality
├── style.css           # Main stylesheet
├── translation.js      # Multilingual support system
├── translation.css     # Translation styling
├── img/                # Card images directory
├── img2/               # Alternative card images
└── README.md           # Project documentation
```

---

## 🎮 How to Play

1. **Start the Game**: Open the game in your browser
2. **Click on Cards**: Click any card to flip it over and reveal the image
3. **Find Matches**: Click another card to find its matching pair
4. **Match Pairs**: If two cards match, they stay face-up
5. **No Match**: If cards don't match, they flip back over after a short delay
6. **Win the Game**: Match all pairs to complete the game
7. **Track Progress**: Watch your move counter to see how efficiently you can complete the game

---

## 🌐 Browser Compatibility

This game works on all modern browsers:
- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

---

## 🚀 Future Improvements

Potential features for future versions:
- ⏱️ Timer to track game completion time
- 🏆 High score leaderboard (using localStorage)
- 🎚️ Difficulty levels (different grid sizes)
- 🎵 Sound effects for card flips and matches
- 🎨 Multiple theme options
- 📊 Statistics dashboard (win rate, average moves, etc.)
- 💾 Game state persistence (save/load progress)
- 🎯 Achievement system

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available for personal and educational use.

---

## 📧 Contact

**Ondrej108**
- GitHub: [@Ondrej108](https://github.com/Ondrej108)
- Repository: [Memory-game-beta](https://github.com/Ondrej108/Memory-game-beta)

---

## About This Project

This memory card game was created as a front-end development project to practice JavaScript game logic, CSS animations, and responsive design. It demonstrates proficiency in DOM manipulation, event handling, array algorithms, and creating an engaging user experience with pure vanilla JavaScript.

Feel free to explore the code, suggest improvements, or use it as a learning resource! 🎮✨
