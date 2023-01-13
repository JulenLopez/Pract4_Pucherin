// Modo texto
window.onload = inicio;

var pucheros;
var jugadorActual=0;

function inicio(){
    let introduccion = document.getElementById("intro");
    introduccion.innerHTML = "¿Cuántos jugadores vais a ser?";
}

 
function pucheros(){
    pucheros = new Array (new Puchero,new Puchero,new Puchero,new Puchero,new Puchero,
        new Puchero,new Puchero,new Puchero,new Puchero,new Puchero);
    
    for(let i = 2; i <= 11; i++){
        pucheros[i].Puchero.numero=i;
        if(i!=7)
            pucheros[i].Puchero.casillasMax=i;
        else
            pucheros[i].Puchero.casillasMax=50;
        for(let j = 1; j <= pucheros[i].puchero.casillasMax; j++){
            pucheros[i].Puchero.casillas["ocupada"+j]=false;
        }
    }
}


function anadirFicha(jugador){
    //i=reroll dados Objeto
    pucheros[i].Puchero.fichasDentro++;
    if(pucheros[i].Puchero.fichasDentro<casillasMax){
        pucheros[i].Puchero.casillas[fichasDentro-1]=true;
    }else if(pucheros[i].Puchero.fichasDentro+1==casillasMax){
        pucheros[i].Puchero.fichasDentro=0;
        jugador.puntacion+=pucheros[i].Puchero.casillasMax;
        for(let j = 0; j <= pucheros[i].Puchero.casillas.length; j++){
            pucheros[i].Puchero.casillas[j]=false;
        }
    }

    saltarJugador();
}

function saltarJugador(){
    jugadorActual++;
}