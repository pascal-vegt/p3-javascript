//let time = prompt("Hoe laat is het?");
let dier = prompt("Wat is uw favoriete dier?");
let paragraph = document.getElementById("paragraph");
let secondParagraph = document.getElementById("secondParagraph");

//if (time > 0 && time <= 6) {
//  paragraph.innerText = "Het is Nacht";
//} else if (time > 6 && time <= 12) {
//  paragraph.innerText = "Het is Ochtend";
//} else if (time > 12 && time <= 18) {
//  paragraph.innerText = "Het is Middag";
//} else if (time > 18 && time <= 24) {
//  paragraph.innerText = "Het is Avond";
//}

switch (dier) {
  case "kikker":
    message = "een " + dier + " die Kwaakt";
    break;
  case "paard":
    message = "een " + dier + " die Hinnikt";
    break;
  case "koe":
    message = "een " + dier + " die Loeit";
    break;
  case "leeuw":
    message = "een " + dier + " die Brult";
    break;
  case "slang":
    message = "een " + dier + " die Slist";
    break;
  case "goudvis":
    message = "een " + dier + " die Blubt";
    break;
  default:
    message = "Dit dier staat niet in ons systeem";
}

secondParagraph.innerText = message;
