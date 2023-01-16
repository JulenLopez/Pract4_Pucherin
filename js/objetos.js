class Jugador{
    constructor(numero, tokens) {
        this.numero = numero;
        this.tokens = tokens;
        this.puntos = 0;
      }
}

class Puchero{
    constructor(numero) {
        this.numero = numero;
        this.casillaMax = numero;
        this.casillaActual = 0;
      }
}


class Dado{
    constructor(){
        this.dado1=0;
        this.dado2=0;
    }
}