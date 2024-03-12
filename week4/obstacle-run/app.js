const dinosaur = document.querySelector(".dinosaur");
const obstacleA = document.querySelector(".obstacle-a");
const obstacleB = document.querySelector(".obstacle-b");
const obstacleC = document.querySelector(".obstacle-c");
const gameOverText = document.querySelector(".game-over");
let isJumping = false;
let isGameOver = false;

function randomObstacles() {
  let obstacles = [obstacleA, obstacleB, obstacleC];

  let random = Math.floor(Math.random() * 60) + 1;

  for (let i = 0; i < obstacles.length; i++) {
    obstacles[i].style.left = random + "px";
    console.log(obstacles[i]);
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "w" && !isJumping && !isGameOver) {
    isJumping = true;
    dinosaur.style.animation = "jump 0.8s";

    setTimeout(() => {
      dinosaur.style.animation = "none";
      isJumping = false;
    }, 800);
  }
});

//function checkCollision() {
//  const dinosaurRect = dinosaur.getBoundingClientRect();
//  const obstacleRect = obstacle.getBoundingClientRect();
//
//  if (
//    dinosaurRect.right > obstacleRect.left &&
//    dinosaurRect.left < obstacleRect.right &&
//    dinosaurRect.bottom > obstacleRect.top
//  ) {
//    gameIsOver();
//  }
//}

// setInterval(checkCollision, 10);

// function gameIsOver() {
//   isGameOver = true;
//   dinosaur.style.animation = "none";
//   obstacle.style.animation = "none";
//   gameOverText.style.display = "block";
// }
