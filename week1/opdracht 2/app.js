let output = document.getElementById("paragraph");
let input = document.getElementById("inputform");
let button = document.getElementById("submitbutton");

let shop = [];

button.addEventListener("click", function add_product() {
    let product = input.value
  if (input.value != "") {
    shop.push(" " + product);
    input.value = "";
  } else {
    alert("Wat je hebt ingevult is niet geldig");
  }
  output.innerText = shop + " ";
});

//Haal de waarde van je input op (de waarde is wat je typt in je input),
//dit sla je op in een variabel genaamd "product".

//Voeg nu de variabele product toe aan je array
//(in de vorige opdracht heb je geleerd hoe je iets toevoegt in je array)
