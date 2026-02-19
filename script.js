let timer = null;
let seconds = 0;
let isLocked = true;
const container = document.querySelector(".game-cards");
const buttonStart = document.getElementById("btnStart");
const buttonReset = document.getElementById("btnReset");
const result = document.querySelector(".match");
const endGame = document.querySelector(".end-game");
const cardsSection = document.querySelector(".cards-section ");

const timeDisplay = document.getElementById("time");

function showDimOverlay() {
  cardsSection.classList.remove("dimmed");
  void cardsSection.offsetWidth;
  cardsSection.classList.add("dimmed");
}


let firstImg = null;
let secondImg = null;
let clickCount = 0;
let firstElement = null;
let secondElement = null;
let matchedPairs = 0;
let gameOver = false;

btnReset.addEventListener("pointerdown", function () {
  location.reload();
});

// Zdvojení obrázků při načtení stránky
const originalImages = Array.from(document.querySelectorAll(".game-cards img"));
originalImages.forEach((img) => {
  const clone = img.cloneNode(true);
  container.appendChild(clone);
});

const images = document.querySelectorAll(".game-cards img");
const totalPairs = images.length / 2;

// Skryj karty před začátkem
images.forEach((img) => {
  img.classList.add("none");
});

// Start game
buttonStart.addEventListener("pointerdown", function () {
  document.body.classList.add("game-started");
  if (timer) clearInterval(timer);

  result.innerHTML = "";
  endGame.innerHTML = "";
  seconds = 120;
  matchedPairs = 0;
  gameOver = false;
  isLocked = false;

  timer = setInterval(() => {
    seconds--;
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    timeDisplay.textContent = `${minutes}:${secs.toString().padStart(2, "0")}`;

    if (seconds <= 30) {
      timeDisplay.classList.add("time-out");
    }

    if (seconds === 0) {
      clearInterval(timer);
      isLocked = true;
      gameOver = true;
      result.innerHTML = "";
      endGame.innerHTML = `<p class="no-match-red">${translations[currentLang].timesUp}</p>`;
      showDimOverlay();
    }
  }, 1000);

  const shuffled = Array.from(images).sort(() => Math.random() - 0.5);

  shuffled.forEach((img) => {
    img.classList.remove("none", "hidden2", "visible");
    img.classList.add("hidden1");
    img.style.opacity = "";
    img.style.visibility = "";
    img.style.pointerEvents = "";

    container.appendChild(img);
  });
});

function resetTurn() {
  clickCount = 0;
  firstImg = null;
  secondImg = null;
  firstElement = null;
  secondElement = null;
}

// Click handler
images.forEach((img) => {
  img.addEventListener("pointerdown", function () {
    if (isLocked || gameOver) return;
    if (img.classList.contains("hidden2")) return;
    if (img === firstElement) return;

    img.classList.remove("hidden1");
    img.classList.add("visible");
    clickCount++;

    if (clickCount === 1) {
      firstImg = img.src.split("/").pop();
      firstElement = img;
    }

    if (clickCount === 2) {
      isLocked = true;
      secondImg = img.src.split("/").pop();
      secondElement = img;

      if (firstImg === secondImg) {
        // Match
        setTimeout(() => {
          result.innerHTML = `<p>${translations[currentLang].match}</p>`;
          const p = result.querySelector("p");
          p.classList.add("match-green");
          showDimOverlay();
        }, 300);

        setTimeout(() => {
          firstElement.classList.remove("visible");
          firstElement.classList.add("hidden2");
          firstElement.style.opacity = "0";
          firstElement.style.visibility = "hidden";
          firstElement.style.pointerEvents = "none";
          secondElement.classList.remove("visible");
          secondElement.classList.add("hidden2");
          secondElement.style.opacity = "0";
          secondElement.style.visibility = "hidden";
          secondElement.style.pointerEvents = "none";
          cardsSection.classList.remove("dimmed");

          matchedPairs++;
          if (matchedPairs === totalPairs) {
            clearInterval(timer);
            isLocked = true;
            gameOver = true;
            result.innerHTML = "";
            endGame.innerHTML = `<p class="match-green">${translations[currentLang].youWon}</p>`;
          } else {
            result.innerHTML = "";
            if (!gameOver) {
              isLocked = false;
            }
          }

          // Reset
          resetTurn();
        }, 1500);
      } else {
        // No match
        setTimeout(() => {
          result.innerHTML = `<p>${translations[currentLang].noMatch}</p>`;
          const p = result.querySelector("p");
          p.classList.add("no-match-red");
          showDimOverlay();
        }, 300);

        setTimeout(() => {
          firstElement.classList.remove("visible");
          firstElement.classList.add("hidden1");
          secondElement.classList.remove("visible");
          secondElement.classList.add("hidden1");
          cardsSection.classList.remove("dimmed");

          result.innerHTML = "";

          // Reset
          resetTurn();
          if (!gameOver) {
            isLocked = false;
          }
        }, 1500);
      }
    }
  });
});
