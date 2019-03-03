/**
 * Ejercicio 4
 a) Hacer un programa que muestre, mediente un ciclo, los números desde el 5 hasta
 el 11 salteando de a 2 elementos(5,7,9 y 11).
 */
 document.write('<br/> Punto a <br/>');
 for (var i = 5; i <=11; i+=2) {
   document.write(i+' ');
 }

/**
 *  b) Hacer un programa que premita al usuario elegir un número m y un n y luego
  muestra todos los naturales entre m y n, pero luego salteando de a 3. Por
  ejemplo, si le usuario ingresara un n igual a 2 y un m igual a 14, el programa
  deberá mostrar 2,5,8, 11, 14.
 */
 document.write('<br/> Punto b <br/>');
 var m=prompt('Ingrese un número  m 1:');
 m=parseInt(m);

 var n=prompt('Ingrese un número n 1:');
 n=parseInt(n);

 if (m>n) {
   for (var i = n; i <=m; i+=3) {
     document.write(i+'-');
   }

 } else {
   for (var i = m; i <=n; i+=3) {
     document.write(i+'-');
   }

 }
 /**
  * c) Hacer un programa que premita al usuario elegir un número n, un m y un p
  y luego muetre todos los naturales entre m y n, pero salteando de a p números.
  Por ejemplo, si el usuario ingresara un n igual a 2 y un m igual a 14 y un p igual
  a 4, el programa deberá mostrar 2,6,10,14.
  */
  document.write('<br/> Punto c <br/>')
  var n=prompt('Ingrese un número n:');
  n=parseInt(n);
  var m=prompt('Ingrese un número m:');
  m=parseInt(m);
  var p=prompt('Ingrese un número p:');
  p=parseInt(p);

if (n>m) {
  for (var i =m; i <=n; i+=p) {
    document.write(i+' ');
  }

} else {
  for (var i =n; i <=m; i+=p) {
    document.write(i+' ');
  }

}
document.write('<br/> Punto 7 <br/>');
if (n>m) {
  var a=m;
  while (a<=n) {
    document.write(a+' ');
    a+=p;

  }

} else {
 a=n;
 while (a<=m) {
   document.write(a+' ');
   a+=p;

 }

}
