var pepe = {
    nombre: 'pepe',
    apellido: 'martin',
    altura: 1.75,
    cantidadDeLibros: 45
}

var vicky = {
    nombre: 'vicky',
    apellido: 'alonso',
    altura: 1.55,
    cantidadDeLibros: 20
}

var pedro = {
    nombre: 'pedro',
    apellido: 'picapiedra',
    altura: 1.4,
    cantidadDeLibros: 95
}

var lucho = {
    nombre: 'lucho',
    apellido: 'portuano',
    altura: 1.85,
    cantidadDeLibros: 72
}

var elena = {
    nombre: 'elena',
    apellido: 'nito delbosque',
    altura: 1.40,
    cantidadDeLibros: 15
}

var tomas = {
    nombre: 'tomas',
    apellido: 'turbado',
    altura: 1.95,
    cantidadDeLibros: 87
}

var personas = [pepe, vicky, pedro, lucho, elena, tomas]

const ALTO = 1.8
const BAJO = 1.5
const esAlta = ({altura}) => altura >= ALTO
const esBaja = ({altura}) => altura <= BAJO
const pasarAlturasACm = persona => ({
    /* persona.altura = persona.altura * 100 */
    /* persona.altura *= 100 */
        ...persona,
        altura: persona.altura * 100
    
})


var personasAltas = personas.filter(esAlta) 
var personasBajas = personas.filter(esBaja) 

console.log(personasAltas)
console.log(personasBajas)

var personasCms = personas.map(pasarAlturasACm)

console.log(personasCms)
console.log(personas)
