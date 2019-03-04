/*Ejercicio 8 (guía 3)
a)Hacer un programa que reciba un número n(n>0) y muestre las n primeras potencias de 2.  Por ejemplo, si el usuario ingresa 6, el programa mostrá: 1 2 4 8 16 32.
b)Hacer un programa que reciba un númeron (n>0) y muertre las n primeras potencias de . Por ejemplo, si el usuario ingresa 4, el programa mostrará: 1 4 27 256. es decir:1^1 2^2 3^3 4^4.
------------------------------------------------

document.write("<hr>");
//a)
var m=prompt('Ingrese un número:');
//m=praseInt(m);
for (var i = 0; i < m; i++) {
  document.write(Math.pow(2,i)+ "<br>");
}

document.write("<hr>");
//b)
var p=prompt('Ingre el número para el punto c:');
//p=praseInt(p);
for (var x = 1; x <= p; x++) {
  document.write(Math.pow(x,x)+"<br>");
}
