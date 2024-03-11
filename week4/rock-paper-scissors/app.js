const computerChoice = document.getElementById("computer-choice");
const playerChoice = document.getElementById("player-choice");
const resultOutput = document.getElementById("result");

const possibleChoices = document.querySelectorAll("button");

let computer;
let player;
let result;

possibleChoices.forEach((button) =>
  button.addEventListener("click", (e) => {
    player = e.target.id;
    playerChoice.innerHTML = player;
    generateComputerChoice();
    getResult();
    resultOutput.innerHTML = result;
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber == 1) {
    computer = "rock";
  }
  if (randomNumber == 2) {
    computer = "paper";
  }
  if (randomNumber == 3) {
    computer = "scissors";
  }
  computerChoice.innerHTML = computer;
}

function getResult() {
  if (computer == player) {
    result = "Gelijkspel";
  }
  if (computer == "rock" && player == "paper") {
    result = "Je hebt gewonnen!";
  }
  if (computer == "rock" && player == "scissors") {
    result = "Je hebt verloren!";
  }
  if (computer == "paper" && player == "scissors") {
    result = "Je hebt gewonnen!";
  }
  if (computer == "paper" && player == "rock") {
    result = "Je hebt verloren!";
  }
  if (computer == "scissors" && player == "rock") {
    result = "Je hebt gewonnen!";
  }
  if (computer == "scissors" && player == "paper") {
    result = "Je hebt verloren!";
  }
}
