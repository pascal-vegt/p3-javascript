let button_r = document.getElementById("button_r");
let button_y = document.getElementById("button_y");
let button_b = document.getElementById("button_b");
let button_g = document.getElementById("button_g");

let button_rbg = document.getElementById("button_rbg");
let button_ybg = document.getElementById("button_ybg");
let button_bbg = document.getElementById("button_bbg");
let button_gbg = document.getElementById("button_gbg");

let button_reset = document.getElementById("button_reset");
let paragraph = document.getElementById("paragraph");

button_r.addEventListener("click", function () {
  paragraph.style.color = "red";
});

button_y.addEventListener("click", function () {
  paragraph.style.color = "yellow";
});

button_b.addEventListener("click", function () {
  paragraph.style.color = "blue";
});

button_g.addEventListener("click", function () {
  paragraph.style.color = "green";
});

button_rbg.addEventListener("click", function () {
  paragraph.style.backgroundColor = "red";
});

button_ybg.addEventListener("click", function () {
  paragraph.style.backgroundColor = "yellow";
});

button_bbg.addEventListener("click", function () {
  paragraph.style.backgroundColor = "blue";
});

button_gbg.addEventListener("click", function () {
  paragraph.style.backgroundColor = "green";
});

button_reset.addEventListener("click", function () {
  window.location.reload();
});

let button_submit_color = document.getElementById("button_submit_color");
let input_text_color = document.getElementById("inputtext_color");

button_submit_color.addEventListener("click", function () {
  paragraph.style.color = input_text_color.value;
  input_text_color.value = "";
});

let button_submit_backgroundcolor = document.getElementById("button_submit_backgroundcolor");
let input_text_backgroundcolor = document.getElementById("inputtext_backgroundcolor");

button_submit_backgroundcolor.addEventListener("click", function () {
    paragraph.style.backgroundColor = input_text_backgroundcolor.value;
    input_text_backgroundcolor.value = "";
});
