let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let pointer = document.querySelector(".pointer");
let scoreElement = document.getElementById("score");
let score = 0;

btn.onclick = function () {
  let number = Math.ceil(Math.random() * 12);
  let rotationAngle = Math.floor(Math.random() * 360);
  container.style.transform = "rotate(" + rotationAngle + "deg)";
  pointer.style.transform = "rotate(" + rotationAngle + "deg)";
  score += number;
  scoreElement.textContent = score;
}
