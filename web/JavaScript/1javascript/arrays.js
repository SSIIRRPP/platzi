var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];

console.log(frutas);

var masFrutas = frutas.push("Uvas"); /* Agrega un elemento al final del array */

var ultimo = frutas.pop(); /* Elimina el ultimo elemento de un array, y lo regresa */

var nuevaLongitud = frutas.unshift("Uvas"); /* Agrega elementos en las primeras posiciones del array */

var borrarPrimeraFruta = frutas.shift(); /* Elimina el primer elemento de un array, y lo regresa */

var posicion = frutas.indexOf("Platano"); /* Busca el índice del primer elemento encontrado pasado como argumento */

var valor = frutas[3]; /* Regresa el valor del índice indicado */