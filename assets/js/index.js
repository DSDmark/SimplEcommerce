// all main variable and configrations.
const canvas = document.getElementById("cvs");
const penColor = document.getElementById("sketchColor");
const changeColor = document.getElementById("changeColor");
changeColor.addEventListener("onclick", () => console.log("hey"));
const ctx = canvas.getContext("2d");
canvas.style.background = "black";
const CH = (canvas.height = 400);
const CW = (canvas.width = 400);
let comstomColor;
let sketchColor = "yellow";
console.log(sketchColor);
canvas.addEventListener("mousemove", (e) => start(e));

function start(e) {
  ctx.fillStyle = sketchColor;
  ctx.beginPath();
  ctx.arc(e.offsetX, e.offsetY, 10, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fill();
}

function getInputValue() {
  comstomColor = penColor.value;
  sketchColor = penColor.value !== "" ? comstomColor : "yellow";
}
start();
