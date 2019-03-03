/**
 * Ejercicio 17
 Escribir un programa que pida los coeficientes de una ecuación de primer grado(ax+b=0)
 y escriba la solución.Recuerda que una ecuación de primer grado puede no tener solución,
 tener una solución única, o que todos los números reales sean solución.
 */
 var a=prompt('Ingrese un número:');
 a=parseFloat(a);
 var b=prompt('Ingrese un número:');
 b=parseFloat(b);
 var x;

 if (a!=0) {
   x=(-b/a);
   document.write('La solución es '+ x+'.');

 }
 else if (a==0 && b!=0) {
   document.write('No tiene solución.');
 }else {
   document.write('La solución es infinita.')
 }
