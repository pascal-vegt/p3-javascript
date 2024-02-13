let paragraphFirst = document.getElementById("paragraphFirst");
let paragraphSecond = document.getElementById("paragraphSecond");
let paragraphThird = document.getElementById("paragraphThird");
let paragraphFourth = document.getElementById("paragraphFourth");

function a(x) {
  if (x % 2 == 0) {
    y = true;
  } else {
    y = false;
  }
}

function b(x) {
  if (x % 2 == 0) {
    yy = true;
  } else {
    yy = false;
  }
}

function c(x) {
  if (x % 2 == 0) {
    yyy = true;
  } else {
    yyy = false;
  }
}

function d(x) {
  if (x % 2 == 0) {
    yyyy = true;
  } else {
    yyyy = false;
  }
}

a(4);
b(7);
c(8);
d(3);

paragraphFirst.innerText = y;
paragraphSecond.innerText = yy;
paragraphThird.innerText = yyy;
paragraphFourth.innerText = yyyy;
