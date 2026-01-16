// constants and variables
let timer = null;
let seconds = 0;
let isLocked = false;
const images = document.querySelectorAll(".game-cards img");
const button = document.getElementById("btnSrc");
const result = document.querySelector(".match");
const timeDisplay = document.getElementById("time");
let firstImg = null;
let secondImg = null;
let clickCount = 0;
let firstElement = null;
let secondElement = null;

// before start
images.forEach((img) => {
  img.classList.add("none");
});

// set up the cards
button.addEventListener("click", function () {
  seconds = 0;

  timer = setInterval(() => {
    seconds++;
    timeDisplay.textContent = seconds + "s"; // Jednoduchý formát
  }, 1000);

  const container = document.querySelector(".game-cards");

  images.forEach((img) => {
    img.classList.remove("none");
    img.classList.add("hidden1");

    // Náhodně vlož na začátek nebo konec
    if (Math.random() > 0.5) {
      container.appendChild(img);
    } else {
      container.prepend(img);
    }
  });
});

// click on pair of cards
images.forEach((img) => {
  img.addEventListener("click", function () {
    if (isLocked) return; // Ignoruj klik pokud je locked
    if (img.classList.contains("hidden2")) return; // Ignoruj zmizlé karty
    if (img === firstElement) return; // Ignoruj stejnou kartu

    img.classList.remove("hidden1");
    img.classList.add("visible");
    clickCount++;

    if (clickCount === 1) {
      firstImg = img.src.split("/").pop();
      firstElement = img;
    }

    if (clickCount === 2) {
      isLocked = true; // ← PŘIDEJ TOTO
      secondImg = img.src.split("/").pop();
      secondElement = img;

      // match
      if (firstImg === secondImg) {
        result.innerHTML = "";
        const p = document.createElement("p");
        p.textContent = "It is a match!";
        result.appendChild(p);

        setTimeout(() => {
          firstElement.classList.remove("visible");
          firstElement.classList.add("hidden2");
          secondElement.classList.remove("visible");
          secondElement.classList.add("hidden2");

          // Reset
          clickCount = 0;
          firstImg = null;
          secondImg = null;
          firstElement = null;
          secondElement = null;
          isLocked = false; // ← Odemkni
        }, 1000);
      } else {
        result.innerHTML = "";
        const p = document.createElement("p");
        p.textContent = "No match!";
        result.appendChild(p);

        setTimeout(() => {
          firstElement.classList.remove("visible");
          firstElement.classList.add("hidden1");
          secondElement.classList.remove("visible");
          secondElement.classList.add("hidden1");

          // Reset
          clickCount = 0;
          firstImg = null;
          secondImg = null;
          firstElement = null;
          secondElement = null;
          isLocked = false; // ← Odemkni
        }, 1000);
      }
    }
  });
});
