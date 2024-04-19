// Selecting HTML elements
const timeDays = document.getElementById("day");
const timeHours = document.getElementById("hour");
const timeMinutes = document.getElementById("minute");
const timeSeconds = document.getElementById("second");

// Target date (in UTC milliseconds)
const targetDate = new Date(1714384800000);

// Update the display function
function updateDisplay() {
    const currentDate = new Date(); // Current date
    const timeLeft = targetDate.getTime() - currentDate.getTime(); // Time difference in milliseconds

    // Convert milliseconds to days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Update the display
    timeDays.innerText = days;
    timeHours.innerText = hours;
    timeMinutes.innerText = minutes;
    timeSeconds.innerText = seconds;
}

// Initial display update
updateDisplay();

// Update the display every second
setInterval(updateDisplay, 1000);