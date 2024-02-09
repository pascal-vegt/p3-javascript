let text = document.getElementById("paragraph");
let text1 = document.getElementById("paragraph1");
let text2 = document.getElementById("paragraph2");
let text3 = document.getElementById("paragraph3");
let text4 = document.getElementById("paragraph4");
let text5 = document.getElementById("paragraph5");
let text6 = document.getElementById("paragraph6");
let text7 = document.getElementById("paragraph7");
let text8 = document.getElementById("paragraph8");
let button = document.getElementById("submitbutton");
let input = document.getElementById("inputform");
let winkelmand = [];

winkelmand.push("Bananen");
winkelmand.push("Whiskey");
winkelmand.push("Chips");
winkelmand.push("Bonen");
winkelmand.push("Aardappelen");

button.addEventListener("click", function () {
  winkelmand.push(input.value);
  input.value = "";
  text3.innerText = winkelmand;
});

text.innerText = "er zitten " + winkelmand.length + " items in uw winkelmand";
text1.innerText = "Uw producten zijn: " + winkelmand;
text2.innerText = winkelmand[3] + ", staat op de vierde plek in uw winkelmand";
text3.innerText = winkelmand;
winkelmand[1] = "Bier";
if (winkelmand.length > 1) {
  text4.innerText = "Uw producten zijn: " + winkelmand;
} else {
  text4.innerText = "U heeft niet genoeg producten om te tonen";
}

if (winkelmand[4] == "drop") {
  text5.innerText = winkelmand;
} else {
  text5.innerText = "u heeft geen drop";
}

text6.innerText = winkelmand.join(", ");

winkelmand.splice(2, 0, "Lemon", "Kiwi");

text7.innerText = winkelmand.join(", ");

winkelmand.sort();

text8.innerText = winkelmand.join(", ");
