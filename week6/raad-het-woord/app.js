let guessField = document.getElementById("guessInput");
let guessSubmit = document.getElementById("checkButton");
let message = document.getElementById("message");

const words = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "grape",
  "honeydew",
  "kiwi",
  "lemon",
  "mango",
  "nectarine",
  "orange",
  "pineapple",
  "quince",
  "raspberry",
  "strawberry",
  "tangerine",
  "ugli fruit",
  "watermelon",
  "xigua",
  "yellow passionfruit",
  "zucchini",
];

let randomNumber = Math.floor(Math.random() * words.length - 1);
let attempts = 0;
let word = words[randomNumber];
guessSubmit.addEventListener("click", function () {
  if (guessField.value == word) {
    message.innerHTML = "You guessed the word in " + attempts + " attempts!";
    guessInput.disabled = true;
    checkButton.disabled = true;
  } else if (guessField.length === 0) {
    message.innerHTML = "Please enter a word.";
  }
  else {
    message.innerHTML = "Incorrect.";
    attempts++;
  }
});
