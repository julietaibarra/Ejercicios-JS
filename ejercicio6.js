/**
 * Ejercicio 15
 Escribir un programa que pida al usuario tres enteros y los guarde en tres
 variables a, b y c. El programa deberá luego hacer que en la variable 'a' quede
 el menor de los valores recibidos, en 'b' el intermedio y en 'c' el mayor (es decir,
ordenará los valores).
 */
 var a=prompt('Ingrese el número a.');
 a=parseInt(a);
 var b=prompt('Ingrese el número b.');
 b=parseInt(b);
 var c=prompt('Ingrese el número c.');
 c=parseInt(c);
 var aux;

 if (a<b && b<c && a<c) {
   document.write('El numero a'+a+' es menor que '+b+' y que '+c);

 }
 else if (a>b && b<c && a>c) {
   document.write( 'Los números '+ a+ ', '+ b + ' y '+c+ '. Ordenadados queda:');
   aux=a;
   a=b;
   b=c;
   c=aux;
   document.write(a+ ','+b+' y '+c+'.');

 }else if (a<b && b>c && a>c) {
    document.write( 'Los números '+ a+ ', '+ b + ' y '+c+ '. Ordenadados queda:');
   aux=a;
   a=c;
   c=b;
   b=aux;
   document.write(a+ ','+b+' y '+c+'.');

 }else if (a<b && b>c && a<c) {
    document.write( 'Los números '+ a+ ', '+ b + ' y '+c+ '. Ordenadados queda:');
   aux=b;
   b=c;
   c=aux;
   document.write(a+ ', '+b+' y '+c+'.');

 }else if (a>b && b<c && a<c) {
    document.write( 'Los números '+ a+ ', '+ b + ' y '+c+ '. Ordenadados queda:');
   aux=a;
   a=b;
   b=aux;
   document.write(a+ ', '+b+' y '+c+'.');

 }
