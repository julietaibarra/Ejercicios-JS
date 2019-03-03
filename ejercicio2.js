/**Ejercicio 2
 * Escribe un programa que pida al usuario dos números de punto flotante y muestre
 su promedio. Además si el promedio es mayor a 7  el progama debe mostrar en pantalla
 "Aprobado" y si no, debe mostrar "Desaprobado".
 */

 var nota1=prompt('Ingrese la primera nota','en números');
 nota1=parseFloat(nota1);
 var nota2=prompt('Ingrese la segunda nota','solo en números');
 nota2=parseFloat(nota2);
 var promedio= (nota1+nota2)/2;
 document.write('Su promedio es de ', promedio,', ');

 if (promedio>7) {
   document.write('Aprobado!');
 }
 else {
   document.write('Desaprobado.');
 }
