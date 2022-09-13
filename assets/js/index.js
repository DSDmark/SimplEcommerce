// all main variable and configrations.
const canvas = document.getElementById("cvs");
const penColor = document.getElementById("sketchColor");
const changeColor = document.getElementById("changeColor");
const ctx = canvas.getContext("2d");
canvas.style.background = "black";
const CH = (canvas.height = 400);
const CW = (canvas.width = 400);
const sketchColor = penColor.value ? penColor : "white";

canvas.addEventListener("mousemove", (e) => start(e));
changeColor.addEventListener("onclick", getInputValue);

function start(e) {
  ctx.fillStyle = sketchColor;
  ctx.beginPath();
  ctx.arc(e.offsetX, e.offsetY, 10, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fill();
}

function getInputValue() {
  // Selecting the input element and get its value
  let inputVal = penColor.value;

  // Displaying the value
  console.log(inputVal);
}

start();
