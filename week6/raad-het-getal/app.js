let guessField = document.getElementById("guessField");
let guessSubmit = document.getElementById("guessSubmit");
let message = document.getElementById("message");

let randomNumber = Math.floor(Math.random() * 100 + 1);
let attempts = 0;

guessSubmit.addEventListener("click", function checkGuess() {
    let guess = guessField.value;
    if (guess == randomNumber) {
        message.innerHTML = `You guessed the number in ${attempts} attempts!`;
        guessField.disabled = true;
        guessSubmit.disabled = true;
    }
    else if (guess > randomNumber) {
        message.innerHTML = "Your guess is too high!";
        guessField.value = "";
        attempts++;
    }
    else if (guess < randomNumber) {
        message.innerHTML = "Your guess is too low!";
        guessField.value = "";
        attempts++;
    }
})