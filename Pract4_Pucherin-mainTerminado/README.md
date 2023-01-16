pucherin.js estan las funciones 
JUGADOR: 
--> nºjugador,nºfichas y puntuacion. 
PUCHEROS--> nºpuchero,nºfichas dentro. Nº pucheros = num max fichas dentro. 

JUGABILIDAD: 
Tirar dados. 
Sumar fichas
Si num max-> Aumenta puntuacion
Cuando se quedue sin fichas se acaba la partidas. 


Requisitos funcionales (reglas)
    - Si una ficha se completa, el jugador se lleva   
      todas las fichas de la casiila.
    - Si sacas un 7, se añade una ficha al puchero
    - Si sacas un 12, te llevas el contenido del    
      puchero
    - Si los jugadores no tienen más fichas que poner, 
      se llevan las fichas que queden en la casilla
    - Si los jugadores no tienen más fichas que poner 
      y saca un 12, se lelva todas las fichas del 
      tablero, incluido el puchero y finaliza el 
      juego. 

Requisitos técnicos
    - Se debe mostrar de quien es cada turno y su número de fichas
    - Habría una versión en modo texto
    - Habrá otra versión en modo gráfico utilizando 
     canvas
    - Se deben utilizar arreglos para almacenar los 
      jugadores,fichas, jugadores, casillas.
    - Se deben crear objetos para los elementos del 
     juego: 
     jugadores ,casillas, dados, puchero ...
