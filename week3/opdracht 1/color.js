let div = document.getElementById("div");
let div2 = document.getElementById("div2");
let div3 = document.getElementById("div3");
let div4 = document.getElementById("div4");

let color = ["orange", "red", "yellow", "blue", "black", "purple"];

function changeColor() {
  number = Math.floor(Math.random() * 6);

  div.style.backgroundColor = color[number];
}

setInterval(changeColor, 40);

function changeColor() {
  number = Math.floor(Math.random() * 6);

  div2.style.backgroundColor = color[number];
}

setInterval(changeColor2, 40);

function changeColor() {
  number = Math.floor(Math.random() * 6);

  div3.style.backgroundColor = color[number];
}

setInterval(changeColor2, 40);

function changeColor3() {
  number = Math.floor(Math.random() * 6);

  div4.style.backgroundColor = color[number];
}

setInterval(changeColor3, 40);

function changeColor4() {
  number = Math.floor(Math.random() * 6);

  div4.style.backgroundColor = color[number];
}

setInterval(changeColor4, 40);
