let block = document.getElementById("block");
let positionX = 0;
let positionY = 0;

window.addEventListener("keydown", function (e) {
  let key = e.key;
  if (key == "d") {
    positionX += 40;
    block.style.left = positionX + "px";
  }
  if (key == "a") {
    positionX -= 40;
    block.style.left = positionX + "px";
  }
  if (key == "s") {
    positionY += 40;
    block.style.top = positionY + "px";
  }
  if (key == "w") {
    positionY -= 40;
    block.style.top = positionY + "px";
  }
});
