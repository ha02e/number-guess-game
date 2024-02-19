let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 6;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let history = [];

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", () => {
  userInput.value = "";
});

updateChance();

function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답", computerNum);
}

function play() {
  let userValue = userInput.value;

  if (userValue < 1 || userValue > 100) {
    resultArea.textContent = "Enter a number between 1~100.";
    return;
  }

  if (history.includes(userValue)) {
    resultArea.textContent = "This number has already been.";
    return;
  }

  chances--;
  updateChance();

  if (userValue < computerNum) {
    resultArea.textContent = "UP!!";
  } else if (userValue > computerNum) {
    resultArea.textContent = "DOWN!!";
  } else {
    resultArea.textContent = "CLEAR!!";
    gameOver = true;
  }

  history.push(userValue);

  if (chances < 1) {
    resultArea.textContent = "GAME OVER";
    gameOver = true;
  }

  if (gameOver == true) {
    playButton.disabled = true;
  }
}

function reset() {
  userInput.value = "";

  pickRandomNum();

  chances = 6;
  updateChance();

  gameOver = false;
  playButton.disabled = false;

  resultArea.textContent = "Enter a number between 1~100.";
}

pickRandomNum();

function updateChance() {
  let chanceIcon = document.getElementById("chance-icon");
  chanceIcon.innerHTML = "";

  for (let i = 0; i < chances; i++) {
    const imgElement = document.createElement("img");
    imgElement.src = "/images/on-heart.png";
    chanceIcon.appendChild(imgElement);
  }
}
