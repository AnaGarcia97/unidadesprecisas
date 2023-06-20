/*cronómetro*/
var cronometro;
var segundos = 0;
var minutos = 0;
var horas = 0;

function start() {
  cronometro = setInterval(() => {
    segundos++;
    if (segundos == 60) {
      segundos = 0;
      minutos++;
      if (minutos == 60) {
        minutos = 0;
        horas++;
      }
    }
    document.getElementById("cronometro").innerHTML = formatTime(horas) + ":" + formatTime(minutos) + ":" + formatTime(segundos);
    
    // Verificar se passaram 5 minutos (300 segundos)
    if (horas == 0 && minutos == 5 && segundos == 0) {
      clearInterval(cronometro);
      alert("O cronômetro atingiu 5 minutos.");
    }
  }, 1000);
}

function pause() {
  clearInterval(cronometro);
}

function reset() {
  clearInterval(cronometro);
  segundos = 0;
  minutos = 0;
  horas = 0;
  document.getElementById("cronometro").innerHTML = "00:00:00";
}

function formatTime(time) {
  return time < 10 ? "0" + time : time; }



  /*Roleta*/
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
  scoreElement.textContent = score;}
