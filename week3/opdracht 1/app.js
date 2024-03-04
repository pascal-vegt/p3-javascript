//const timeoutId = setTimeout(showNumber, 5000);
//let input = document.getElementById("button");
//let inputtwo = document.getElementById("buttontwo");

//function showNumber() {
//    document.write("You died!");
//}
//
//input.addEventListener("click", function () {
//  clearTimeout(timeoutId);
//  document.write("Timer stopped!");
//});
//
//inputtwo.addEventListener("click", function () {
//  clearInterval(intervalId);
//  document.write("Interval stopped!");
//});
//
//const intervalId = setInterval(function () {
//  console.log("goedemiddag");
//}, 2000);

function showDate() {
  let output = document.getElementById("paragraph");
  let input = new Date();
  output.innerText = input.toLocaleString("en-GB");
}

const intervalId = setInterval(showDate, 100);
