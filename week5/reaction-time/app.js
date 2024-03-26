let timeText = document.getElementById("time");
const startButton = document.getElementById("goButton");
const restartButton = document.getElementById("restartButton");
const container = document.getElementById("container");
let time;

let startTime;
let stopTime;
let reaction;
let timeOut;

function changeColorToGreen() {
  container.style.backgroundColor = "green";
  startTime = Date.now();
}

startButton.addEventListener("click", function (e) {
  e.stopPropagation();
  startButton.style.display = "none";
  container.style.backgroundColor = "red";
  time = (Math.floor(Math.random() * 10) + 1) * 1000;
  timeOut = setTimeout(changeColorToGreen, time);
});

container.addEventListener("click", function () {
  if (container.style.backgroundColor == "red") {
    timeText.innerText = "You failed, please click restart to try again";
    container.style.backgroundColor = "#aaa";
    restartButton.style.display = "block";
    clearTimeout(timeOut);
  }
  if (container.style.backgroundColor == "#aaa") {
    return;
  }
  if (container.style.backgroundColor == "green") {
    stopTime = Date.now();
    reaction = stopTime - startTime;
    timeText.innerText =
      "Your reaction time is " + reaction + "ms";
  }
});

restartButton.addEventListener("click", function (e) {
  e.stopPropagation();
  startButton.style.display = "block";
  restartButton.style.display = "none";
  timeText.innerText = "";
  container.style.backgroundColor = "#aaa";
});
