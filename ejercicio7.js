/**
 * Ejercico 16
 Un año es bisiesto si es múltiplo de 4. Pero no siempre,las excepciones son los
 años múltiplos de 100 que no son múltiplos de 400 (1900 no es bisiesto pero 2000, sí).
 Escribir un programa que diga si un año ingresado por el usuario es bisiesto.
 */

 var anio=prompt('Ingrese un año', 'Solo los número.');
 anio=parseInt(anio);

 if (anio%400==0 || (anio%100!=0 && anio%4==0)) {

     document.write(' El año '+ anio +' es bisiesto.');

   }
   else {
      document.write('El año '+anio+ ' no es bisiesto.');
   }
