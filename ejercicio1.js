/**
 * Un ciudadano argentino está exento de votar en estos casos:
Tiene más de 70 años
Tiene entre 18 y 70 años pero se encuentra a más de 500 km del centro de votación.
Suponiendo que las variables edad y distancia representan la edad y la distancia del ciuda- dano,
escribir la expresión lógica que representa esta situación.

 */
 var edad=prompt('Ingrese su edad', 'en números, por favor');
 var distancia=prompt('Ingrese la distacia entre su domicilio y el centro de votación','en números');
 edad=parseInt(edad);
 distacia=parseInt(distancia);


if (distacia<500) {
  if (edad>70 || edad<18) {
    alert('Esta exento de votar.');
  }
  else {
    alert('Usted puede votar');
  }


}
else {
  alert('Esta exento de votar');
}
