const numBlocks = 30;
const blocks = [];

for (let i = 1; i <= numBlocks; i++) {
  const block = document.createElement("div");
  block.className = "block";
  block.id = "block" + i;
  document.body.appendChild(block);
  blocks.push(block);

  block.addEventListener("click", () => changeColorOnClick(i));
  setInterval(() => moveBlock(i), 100 * i);
}

function moveBlock(index) {
  const block = blocks[index - 1];
  const yAxis = Math.floor(Math.random() * 2000);
  const xAxis = Math.floor(Math.random() * 1100);
  block.style.left = yAxis + "px";
  block.style.top = xAxis + "px";
}

function changeColorOnClick(index) {
  const block = blocks[index - 1];
  block.style.backgroundColor = "red";

  setTimeout(() => {
    block.style.backgroundColor = getRandomColor();
  }, 3000);
}

function getRandomColor() {
  const bgColour = Math.floor(Math.random() * 16777216).toString(16);
  return "#" + ("000000" + bgColour).slice(-6);
}
