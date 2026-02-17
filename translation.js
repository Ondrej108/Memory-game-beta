const translations = {
  en: {
    title: "Memory game",
    howToPlay: "How to play:",
    startBtn: "Start game",
    resetBtn: "Reset game",
    timeLabel: "Time:",
    instruction1: "Click Start Game",
    instruction2: "Match pairs by clicking 2 cards",
    instruction3: "Find all pairs to win",
    instruction4: "You have 2 minutes",
    goodLuck: "Good luck!",
    match: "Match!",
    noMatch: "No match!",
    timesUp: "Time's up!!!",
    youLost: "You lost!",
    footer: "Memory Game Portfolio Project | © 2026 Ondrej Medas",
  },
  cz: {
    title: "Pexeso",
    howToPlay: "Jak hrát:",
    startBtn: "Začít hru",
    resetBtn: "Resetovat hru",
    timeLabel: "Čas:",
    instruction1: "Klikněte na Začít hru",
    instruction2: "Najděte páry kliknutím na 2 karty",
    instruction3: "Najděte všechny páry pro výhru",
    instruction4: "Máte 2 minuty",
    goodLuck: "Hodně štěstí!",
    match: "Shoda!",
    noMatch: "Neshoda!",
    youWon: "Vyhrál jsi!!!",
    timesUp: "Čas vypršel!",
    footer: "Pexeso Portfolio Projekt | © 2026 Ondrej Medas",
  },
};

let currentLang = "en";

function changeLanguage(lang) {
  currentLang = lang;

  document.querySelectorAll("[data-translate]").forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    changeLanguage(btn.dataset.lang);
  });
});
