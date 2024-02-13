let paragraphFirst = document.getElementById("paragraphFirst");
let paragraphSecond = document.getElementById("paragraphSecond");
let paragraphThird = document.getElementById("paragraphThird");
let paragraphFourth = document.getElementById("paragraphFourth");

function measureTemperatureOne(temperature) {
  temperature = 17;
  if (temperature < 10) {
    alert("Het is koud");
  } else if (temperature > 10 && temperature < 16) {
    paragraphFirst.innerHTML =
      "Het niet warm, je kan beter een jas aandoen <br>";
  } else if (temperature > 16 && temperature < 24) {
    paragraphFirst.innerHTML = "Het is niet koud, maar ook niet heel warm <br>";
  } else if (temperature > 24 && temperature < 30) {
    paragraphFirst.innerHTML = "Je hoeft geen jas aan te doen vandaag <br>";
  } else if (temperature > 30) {
    paragraphFirst.innerHTML = "Je kan je maar beter insmeren <br>";
  }
}

measureTemperatureOne();

function measureTemperatureTwo(temperature) {
  temperature = 26;
  if (temperature < 10) {
    alert("Het is koud");
  } else if (temperature > 10 && temperature < 16) {
    paragraphSecond.innerHTML =
      "Het niet warm, je kan beter een jas aandoen <br>";
  } else if (temperature > 16 && temperature < 24) {
    paragraphSecond.innerHTML =
      "Het is niet koud, maar ook niet heel warm <br>";
  } else if (temperature > 24 && temperature < 30) {
    paragraphSecond.innerHTML = "Je hoeft geen jas aan te doen vandaag <br>";
  } else if (temperature > 30) {
    paragraphSecond.innerHTML = "Je kan je maar beter insmeren <br>";
  }
}

measureTemperatureTwo();
function measureTemperatureThree(temperature) {
  temperature = 31;
  if (temperature < 10) {
    alert("Het is koud");
  } else if (temperature > 10 && temperature < 16) {
    paragraphThird.innerHTML =
      "Het niet warm, je kan beter een jas aandoen <br>";
  } else if (temperature > 16 && temperature < 24) {
    paragraphThird.innerHTML = "Het is niet koud, maar ook niet heel warm <br>";
  } else if (temperature > 24 && temperature < 30) {
    paragraphThird.innerHTML = "Je hoeft geen jas aan te doen vandaag <br>";
  } else if (temperature > 30) {
    paragraphThird.innerHTML = "Je kan je maar beter insmeren <br>";
  }
}

measureTemperatureThree();

function measureTemperatureFour(temperature) {
  temperature = 11;
  if (temperature < 10) {
    alert("Het is koud");
  } else if (temperature > 10 && temperature < 16) {
    paragraphFourth.innerHTML =
      "Het niet warm, je kan beter een jas aandoen <br>";
  } else if (temperature > 16 && temperature < 24) {
    paragraphFourth.innerHTML =
      "Het is niet koud, maar ook niet heel warm <br>";
  } else if (temperature > 24 && temperature < 30) {
    paragraphFourth.innerHTML = "Je hoeft geen jas aan te doen vandaag <br>";
  } else if (temperature > 30) {
    paragraphFourth.innerHTML = "Je kan je maar beter insmeren <br>";
  }
}

measureTemperatureFour();
