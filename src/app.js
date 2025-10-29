import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ['Mi perro', 'Mi abuela', 'El cartero', 'el pajaro'];
let action = ['se comio', 'me quito', 'aplasto', 'rompio'];
let what = ['la tarea', 'mi telefono', 'el auto'];
let when = ['antes de clase', 'cuando estaba durmiendo', 'cuando estaba entrenando', 'mientras alrmorzaba', 'cuando estaba en misa'];

const randomizador = (anyArray) => { 
  let random = Math.floor(Math.random() * 3);
  return anyArray[random]
}

window.onload = function() {
  document.querySelector("#excuse").innerHTML = randomizador(who) + " " + randomizador(action) + " " + randomizador(what) + " " + randomizador(when)
};
