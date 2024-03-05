let block = document.getElementById("block");
let position = 0;

function moveBlock() {
  position += 1;
  block.style.left = position + "px";
  if (position >= screen.width) {
    position = -400;
  }
}

function moveBlockBack() {
  position -= 1;
  block.style.left = position + "px";
  if (position < 0) {
    setInterval(moveBlock);
    clearInterval(moveBlockBack, 10);
  }
}

setInterval(moveBlock, 10);
