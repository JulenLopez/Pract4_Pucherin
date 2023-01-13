// Modo texto
window.onload = inicio;

function inicio(){
    let introduccion = document.getElementById("intro");
    introduccion.innerHTML = "¿Cuántos jugadores vais a ser?";
}

//array de jugadores que se rellena según el num selecionado, en el select? 
const ARRAY_JUGADORES = [];
for (let i = 1; i <= jugadores.value; i++) {
  let jugador = Jugador("Jugador " + i,puntuacion);
  array.push(jugador);
  
}

function primerTurno(){
    return Math.floor(Math.random() * (jugadores.value - 1 + 1) + 1)
}


