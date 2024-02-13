let y = document.getElementById("paragraphFirst");
let yy = document.getElementById("paragraphSecond");
let yyy = document.getElementById("paragraphThird");

function a(x) {
  if (x >= 5.5 && x <= 10) {
    z = "Je hebt een voldoende gehaalt";
  }
  if (x > 0 && x <= 5.4) {
    z = "Je hebt een onvoldoende gehaalt";
  }
  if (x < 0 || x > 10) {
    z = "Je hebt een ongeldig nummer ingevult";
  }
}

function b(x) {
  if (x >= 5.5 && x <= 10) {
    zz = "Je hebt een voldoende gehaalt";
  }
  if (x > 0 && x <= 5.4) {
    zz = "Je hebt een onvoldoende gehaalt";
  }
  if (x < 0 || x > 10) {
    zz = "Je hebt een ongeldig nummer ingevult";
  }
}

function c(x) {
  if (x >= 5.5 && x <= 10) {
    zzz = "Je hebt een voldoende gehaalt";
  }
  if (x > 0 && x <= 5.4) {
    zzz = "Je hebt een onvoldoende gehaalt";
  }
  if (x < 0 || x > 10) {
    zzz = "Je hebt een ongeldig nummer ingevult";
  }
}

a(4);
b(12);
c(8);

y.innerText = z;
yy.innerText = zz;
yyy.innerText = zzz;
