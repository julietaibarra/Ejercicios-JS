/**
 * Ejercicio 9
 a)Hacer un programa que permita al usuario elegir un número positivo n y luego muestre en pantalla los divisores de n.
---------------------------------------------------
*/
var n=prompt('Ingrese un número positivo:');
n=parseInt(n);
if (n<0) {
  alert('El número no es positivo!! Ingrese un número positivo!!!');
}else {
  for (var i = 0; i < n; i++) {
    if (n%i==0) {
      document.write(i+"<br>");
    }
  }
}
document.write("<hr>");
/*b)Hacer un programa que premita al usuario elegir un número positivo n y luego muestre en pantalla todos los divisores pares de n.
--------------------------------------------------------
*/

  for (var i = 0; i < n; i++) {
    if (n%i==0) {
      if (i%2==0) {
        document.write(i+"<br>");
      }
    }
  }
document.write("<hr>");
 /*c)Hacer un programa que premita al usuario elegir un número positivo n y luego muestre en pantalla la cantidad de divisores de n.
 --------------------------------------------------------
 */
 var cont=0;
 for (var i = 0; i < n; i++) {
   if (n%i==0) {
     cont+=1;
   }
 }
document.write('La cantidad de divisores del número '+n+' son '+cont+'.');
document.write("<hr>");
 /*d)Hacer un programa que permita al usuario elegir un número positivo n y luego muestre en pantalla la suma de los divisores de n.
 --------------------------------------------------------*/
var sumaDiv=0;
for (var i = 0; i < n; i++) {
  if (n%i==0) {
    sumaDiv+=i;
  }
}
document.write('La suma de los divisores de '+n+' es '+sumaDiv);
document.write("<hr>");
/* e)Hacer un programa que premita al usuario elegir dos números positivos c y n y luego muestre en pantalla los primeros c divisores de n.
--------------------------------------------------------*/
var cantDiv=prompt('Ingresa la cantidad de divisores que desea mostrar: ');
var cantTotal=0;
for (var i = 0; i < n; i++) {
  if (n%i==0) {
    if (cantTotal<cantDiv) {
      document.write(i+"<br>");
      cantTotal++;

    }

  }
}
document.write("<hr>");
 /*f)Hacer un programa que premita al usuario elegir dos número positivos c y n y luego muestre en pantalla los útimos c divisores de n.

 */
 var cant=0;
var c=prompt('Ingrese la  cantidad de divisores para c');
for (var i = n; i >0; i--) {
  if (n%i==0) {
    if (cant<c) {
      if (i!=n) {
        document.write(i+"* <br>");
        cant++;
      }
    }
  }
}

document.write("<hr>");
