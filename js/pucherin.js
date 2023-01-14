// Modo texto
window.onload = inicio;

var pucheros;
var jugadores =new Array;
var jugadorActual=1;
var dado = new Dado;
var gameover = false;

function inicio(){
    pucheros();
    let introduccion = document.getElementById("intro");
    let jugar = document.getElementById("jugar");
    introduccion.innerHTML = "¿Cuántos jugadores vais a ser?";
    jugar.addEventListener("click", iniciarPartida);

    
//array de jugadores que se rellena según el num selecionado, en el select? 
const ARRAY_JUGADORES = [];
    for (let i = 1; i <= jugadores.value; i++) {
let jugador = Jugador("Jugador " + i,puntuacion);
    array.push(jugador);
  
}
function primerTurno(){
    return Math.floor(Math.random() * (jugadores.value - 1 + 1) + 1)
}

    function iniciarPartida()
    {
        let numJugadores=document.getElementById("numeroJugadores").value;

        for(let i = 0; i < numJugadores; i++)
            jugadores.push(new Jugador(i+1,50/numJugadores,0))

        do
            juegaSolo(numJugadores);
        while(!gameover)
    }
    
    function juegaSolo(numJugadores){
        alert("Es el turno de jugador " + jugadorActual); 
        jugada(dados());
        saltarJugador();
        if(jugadores.jugador[numJugadores].fichas<=0){
            gameover=true;
        }
    }

    function dados()
    {
        dado.dado1= Math.floor(Math.random() * 6) + 1;
        dado.dado2 = Math.floor(Math.random() * 6) + 1;
        let dadosTotal = dado.dado1+dado.dado2;
        //TODO Implementar sonido de dados cuando se haga la tirada
        introduccion.innerHTML = "Has sacado un " + dado.dado1 + " y un " + dado.dado2 + " en total: " + dadosTotal;
        return dadosTotal;
        // EN CASO DE HACERLO VISUAL, AQUI TENEMOS CÓMO HACER LA PARTE DE LOS DADOS 
        //Dados individuales un switch de 6 for de 2
        /*switch(num)
        {
            case 1:
            dom_img.src='./cara1.png';
            break;
            case 2:
            dom_img.src='./cara2.png';
            break;
        }*/
    }

    function jugada(valorTirada,jugadorActual){
        let aux = pucheros[valorTirada].puchero;
        jugadores.jugador[jugadorActual].fichas--;//Se le quita una ficha de juego al jugador que acaba de recibir turno

        if(valorTirada==12){
            //TODO Sonar campana tocho
            jugadores.jugador[jugadorActual].puntuacion+=aux.casillaActual;
            pucheros[7].casillaActual=0;
        }else if(aux.casillaActual+1<aux.casillaMax){
            pucheros[valorTirada].puchero.casillaActual++;
        } else{
            //para poner a false
            pucheros[valorTirada].puchero.casillaActual=0;
            //TODO Meter sonido cuando se recojen las fichas
            jugadores.jugador[jugadorActual].puntuacion+=aux.casillaMax;
        }
    }
}


function pucheros(){
    let aux=new Puchero();
    pucheros = new Array (new Puchero(),new puchero,new puchero,new puchero,new puchero,
        new puchero,new puchero,new puchero,new puchero,new puchero);
    
    for(let i = 2; i <= 11; i++){
        pucheros[i].puchero.numero=i;
        if(i!=7)
            pucheros[i].puchero.casillaMax=i;
        else
            pucheros[i].puchero.casillaMax=50;
    }
}

function saltarJugador(){
    jugadorActual++;
}

function turnoJugador(){
    anadirFicha(jugadores[jugadorActual]);
}