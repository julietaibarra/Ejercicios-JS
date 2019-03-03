/**
Ejercicio 18
 * Una función cuadratica se escribe como ax^2+bx+c. Las mismas puede tener una, dos o ninguna
 raíz. Ecribir un programa que pida al usuario los datos de la misma, es decir, a, b y c, y
 muestre todas sus raíces, o el mensaje 'No tiene raíces' cuando corresponda. Recordar que las
 raíces están dadas por la fórmula de la resolvente.
 CORREJIR!!!
 */
 var a=prompt('Ingrese el valor a:');
 a=parseFloat(a);
 var b=prompt('Ingrese el valor b:');
 b=parseFloat(b);
 var c=prompt('Ingrese el valor c:');
 c=parseFloat(c);
 var x1;
 var x2;
 var x;
 if (a!=0) {
   x1=(-b+(Math.sqrt((Math.pow(b,2)-(4*a*c)))))/(2*a);
   x2=(-b-(Math.sqrt((Math.pow(b,2)-(4*a*c)))))/(2*a);
   document.write('Las soluciones son x1:'+x1+ ' y x2:'+x2);
 }
 else {
   if (b!=0) {
     x=-c/b;
     document.write('La solución de la ecuación es: x='+ x);

   }
   else {
     if (c!=0) {
       document.write('La ecuación no tiene solución.');
   }
   else {
     document.write('La ecución tiene infinitas soluciones.');
   }
 }
}
