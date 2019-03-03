/**
 * Ejercicio 1, for y while
 a) Hacer un programa que muestre, mediante un ciclo, los primeros 5
 números naturales.
 b) Hacer un  programa que premita al usuario elegir un número n y luego
 muestre los primeros n números naturales( 1,2,...,n).
 */
 for (var i = 1; i <= 5; i++) {
   document.write(i+',');
 }

document.write('<br/> Punto b =');/*la etiqueta br sirve para realizar saltos del linea*/
 var numero=prompt('Ingrese un número natural:');
 numero=parseInt(numero);


 for (var i = 1; i <=numero; i++) {
   document.write('<br/>'+i+ '-');

 }
 /**
  * Ejercicio 2
  a) Hacer un programa que muestre, mediante un ciclo, los números desde
  el 4 hasta el 7 (4,5,6,7).
  b) Hacer un programa que premita al usuario elegir un número m y un n y
  luego muestre todos los naturales m y n (m, m+1, m+2,...,n-1, n).
  ¿Qué pasa si n es menor que m?
  */
document.write('<br/> Punto2 a <br/>');
  for (var i = 4; i <=7; i++) {

  document.write(i+ '-');
  }

document.write('<br/> Punto2 b <br/>');
  var numero1=prompt('Ingrese un número :');
  var numero2=prompt('Ingrese otro número:');

  if (numero1>numero2) {
    for (var i = numero2; i <=numero1; i++) {
      document.write(i+' * ');
    }

  } else {
    for (var i =numero1; i <= numero2; i++) {
      document.write(i+ ' * ');
    }

  }
