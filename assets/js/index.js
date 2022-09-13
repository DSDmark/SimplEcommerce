// all main variable and configrations.
const canvas = document.getElementById("cvs");
const ctx = canvas.getContext("2d");
canvas.style.background = "black";
const CH = (canvas.height = 400);
const CW = (canvas.width = 400);

canvas.addEventListener("mousemove", (e) => start(e));

function start(e) {
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(e.offsetX, e.offsetY, 10, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fill();
}
start();
