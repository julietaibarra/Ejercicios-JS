/**
 * Ejercicio 21
 Hacer un programa que premita al usuario jugar al piedra, papel o tijera con la computadora.
 Se debe jugar al mejor de 5, si uno de los participantes consigue 3 victorias al juego gana.
 */
alert('PIEDRA, PAPEL O TIJERA');

var jugadas=0;
var resulJuga=0;
var resulCompu=0;


while (jugadas<5) {
    var jugador=prompt('elija 0:piedra , 1:papel, 2:tijera');
    jugador=parseInt(jugador);
    //var computadora=Math.ceil(Math.random()*2);
    var computadora=Math.floor(Math.random()*(3-0))+0;//al poner al 3 como maximo, nunca es elegido.
    if ((jugador<0)||(jugador>2)) {
      alert('error!');
    } else {

      if ((computadora==0)&&(jugador==1)) {
        alert('Punto para el jugador');
        resulJuga++;
      }if ((computadora==1)&&(jugador==2)) {
        alert('Punto para  el jugador');
        resulJuga++;
      }
      if ((computadora==2)&&(jugador==0)) {
        alert('Punto para el jugador');
        resulJuga++;
      }
      if ((computadora==1)&&(jugador==0)) {
        alert('Punto para la computadora');
        resulCompu++;
      }
      if ((computadora==2)&&(jugador==1)) {
        alert('Punto para la computadora');
        resulCompu++;
      }
      if ((computadora==0)&&(jugador==2)) {
        alert('Punto para la computadora');
        resulCompu++;

      }
      if (computadora==jugador) {
        alert('Empate, no suman puntos');
      }
      document.write('La computadora eligio '+computadora+" y Ud "+jugador+'<br>'+'<hr>'+'<br>');
      jugadas++;
    }
  }


if (resulJuga>resulCompu) {
  document.write('Ud gana! Felicidades! su puntaje es de '+resulJuga+' puntos y el de la computadora '+resulCompu+' Puntos');
}else if (resulJuga==resulCompu) {
  document.write('Empate!! su puntaje es de '+ resulJuga+' puntos y el de la computadora es de '+resulCompu+ ' puntos.')

}
else {
  document.write('La computadora Gano! su puntaje es '+resulJuga+' puntos y el de la computadora es de '+resulCompu+' puntos');
}
