/**
 * Ejerciocio 14
 Escibir un programa que pida al usuario dos enteros y los guarde
 en dos variables. Si el primero de los valores fuera menor que el
 segundo, el programa deberá además intercambiar los valores de las
 variables y mostrarlos de mayor a menor.
 */
var numero1=prompt('Ingrese un número');
numero1=parseInt(numero1);
var numero2=prompt('Ingrese otro número');
numero2=parseInt(numero2);
var aux=0;

if (numero1<numero2) {
  document.write('El número 1: '+ numero1+ ' es menor que el numero 2: '+ numero2);
    aux=numero2;
  numero2=numero1;
  numero1=aux;
  document.write(', ahora el número 1 es: '+numero1+ ' y el número 2 es: '+numero2+'.');

}else {
  document.write('El número 2: '+ numero2+' es menor que el número 1: '+numero1);
  aux=numero1;
  numero1=numero2;
  numero2=aux;
  document.write(', ahora el número 2 es el '+numero2+ ' el numero 1: '+numero1+'.');
}
