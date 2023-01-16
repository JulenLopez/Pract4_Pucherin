// Modo texto
window.onload = inicio;

var pucheros;
var jugadores = new Array;
var jugadorActual = 1;
var dado = new Dado();
var gameover = false;
var numJugadores
var introduccion = document.getElementById("intro");
var jugar = document.getElementById("jugar");
var sonido = true;
var botonSonido = document.getElementById("botonAudio");
var tiempo;


function inicio() {
    //Iniciamos asignando el array de pucheros y la asignacion de eventos a los botones.
    pucheros();
    introduccion.innerHTML = "¿Cuántos jugadores vais a ser?";

    jugar.addEventListener("click", (Event) => iniciarPartida());
    botonSonido.addEventListener("click", (Event) => { musica(); })//Cambio la foto y la variable musica para que sepan si hay audio y la variable para saber si ejecutar o no el sonido
}

function primerTurno() {//Creo que esto no se usa pero lo he dejado por si aca
    return Math.floor(Math.random() * (jugadores.value - 1 + 1) + 1)
}

function iniciarPartida() {
    numJugadores = document.getElementById("numeroJugadores").value;

    //array de jugadores que se rellena según el num selecionado, en el select? 
    for (let i = 0; i < numJugadores; i++)
        jugadores.push(new Jugador(i + 1, 50 / numJugadores))

    do
        juegaSolo();
    while (!gameover)

    let puntuacionMax = 0
    let ganador = ""

    for (let i = 0; i < numJugadores; i++)
        if (jugadores[i].puntos > puntuacionMax) {
            ganador = jugadores[i].numero
            puntuacionMax = jugadores[i].puntos
        }

    console.log("¡¡¡EL GANADOOOR ES EL JUGADOR " + ganador + "!!!")
}

function juegaSolo() {
    //Funcion principal que mueve todo el esqueleto.
    console.log("Es el turno de jugador " + jugadorActual);
    setTimeout(jugada(dados(), jugadorActual - 1), 1000);
    console.log("La puntacion del jugador " + jugadorActual + " es " + jugadores[jugadorActual - 1].puntos)
    saltarJugador();
    if (jugadores[numJugadores - 1].tokens <= 0) {
        //Si termina hace que el do while no se ejecute y la partida muera
        gameover = true;
    }
}

function dados() {
    dado.dado1 = Math.floor(Math.random() * 6) + 1;
    dado.dado2 = Math.floor(Math.random() * 6) + 1;
    let dadosTotal = dado.dado1 + dado.dado2;
    //TODO Implementar sonido de dados cuando se haga la tirada
    console.log("Has sacado un " + dado.dado1 + " y un " + dado.dado2 + " en total: " + dadosTotal);
    return dadosTotal;
    //Esto de abajo estaria to guapo perooooo ni zorra de como montarlo o sacar las fotos o yo que se
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

function jugada(valorTirada, jugadorActual) {
    jugadores[jugadorActual].tokens--;//Se le quita una ficha de juego al jugador que acaba de recibir turno
    valorTirada = valorTirada - 2; //Le quito 2 puntos para que la tirada cuadre con el array ya que no quiero meter dos posiciones vacias en este.

    if (valorTirada == 10) {//El 12 pasaria a ser 10 por el juego contra el array
        //TODO Sonar campana tocho
        jugadores[jugadorActual].puntos += pucheros[5].casillaActual;
        pucheros[5].casillaActual = 0;
    } else if ((pucheros[valorTirada].casillaActual + 1 < pucheros[valorTirada].casillaMax) && (jugadores[jugadorActual].tokens != 0)) {//He tenido que poner el and porque sino se liaba en la ultima fichita
        pucheros[valorTirada].casillaActual++;
        imprimirCasillas(valorTirada);//Imprime las fichas cuando entran explico mas en funcion
    } else {
        //Quitamos la fichas y le damos la puntuacion al jugador
        jugadores[jugadorActual].puntos += pucheros[valorTirada].casillaActual + 1;
        pucheros[valorTirada].casillaActual = 0;
        imprimirCasillas(valorTirada);
        //TODO Meter sonido cuando se recojen las tokens

    }
}

function pucheros() {
    //Pues eso inicializo el array de pucheros y al 7 le hago que tenga el max de fichas
    //constructor(numero)
    pucheros = new Array(new Puchero(2), new Puchero(3), new Puchero(4), new Puchero(5), new Puchero(6),
        new Puchero(7), new Puchero(8), new Puchero(9), new Puchero(10), new Puchero(11));
    pucheros[5].casillaMax = 50;
}

function saltarJugador() {
    //Pues este cacharro al final ha sido mas tocho XD
    //Si el jugador no es el ultimo +1 antes segia sumando hasta el infinito y no molaba :P
    if (jugadorActual < numJugadores)
        jugadorActual++;
    else {
        //Pero si tenemos hasta un tracking de la partida, autenticas cositas
        console.log("")
        console.log("////////////////////////////////////////////////////");
        console.log("Final de la ronda.")
        console.log("El estado de la partida es el siguiente:")

        console.log("Puntacion de los jugadores:")
        for (let i = 0; i < numJugadores; i++)
            console.log("El jugador " + jugadores[i].numero + " tiene una puntación de: " + jugadores[i].puntos + " | Le quedan por jugar " + jugadores[i].tokens)

        console.log("Situacion de los pucheros:")
        for (let i = 0; i <= 9; i++)
            console.log("El puchero " + pucheros[i].numero + " tiene " + pucheros[i].casillaActual + " fichas en su interior")
        console.log("////////////////////////////////////////////////////");
        console.log("")
        //Yyyyyyy volvemos a empezar
        jugadorActual = 1;
    }
}

function turnoJugador() {
    //Se podria decir que comparada con sus hermanas no vale para nada pero yo digo que tiene futuro
    //Se puede meter un sonido de cambio de jugador por aqui, por eso de que tenga un proposito de existencia la funcion.
    anadirFicha(jugadores[jugadorActual]);
}

function musica() {
    //Cosicas que hice en master g y estan guapas AKA cambia una foto con un click :)
    if (sonido) {
        botonSonido.style.backgroundImage = "url('./img/nomusic.png')";
        sonido = false;
    } else if (!sonido) {
        botonSonido.style.backgroundImage = "url('./img/music.png')";
        sonido = true;
    }
}

function pararTiempo() {
    //Toma puta mierda que no funciona.... Internet es un fracaso
    tiempo = setTimeout(alert, 1000, 'Poniendo fichas!!!');
}

function imprimirCasillas(valorTirada) {
    //Autentico parche para la version 1.0 con esto toooodoos los graficos funcionan de forma intended
    //Me encanta pillar los juegos de salida me da una alegria que la industria no se este muriendo inmensa :,)
    //El codigo de carlos hace que el canvas 5 en vez de ser el 7 sea el 8 por lo que era un puto caos y cuando invocaba al 9 pues todavia mas destruccion
    //Feo pero funciona a tope.
    switch (valorTirada) {
        case 0:
            pintarCasilla(canvases[0], 2, pucheros[valorTirada].casillaActual)
            break;
        case 1:
            pintarCasilla(canvases[1], 3, pucheros[valorTirada].casillaActual)
            break;
        case 2:
            pintarCasilla(canvases[2], 4, pucheros[valorTirada].casillaActual)
            break;
        case 3:
            pintarCasilla(canvases[3], 5, pucheros[valorTirada].casillaActual)
            break;
        case 4:
            pintarCasilla(canvases[4], 6, pucheros[valorTirada].casillaActual)
            break;
        case 6:
            pintarCasilla(canvases[5], 8, pucheros[valorTirada].casillaActual)
            break;
        case 7:
            pintarCasilla(canvases[6], 9, pucheros[valorTirada].casillaActual)
            break;
        case 8:
            pintarCasilla(canvases[7], 10, pucheros[valorTirada].casillaActual)
            break;
        case 9:
            pintarCasilla(canvases[8], 11, pucheros[valorTirada].casillaActual)
            break;
    }
}