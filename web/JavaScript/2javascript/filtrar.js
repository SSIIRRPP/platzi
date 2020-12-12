var pepe = {
    nombre: 'pepe',
    apellido: 'martin',
    altura: 1.75
}

var vicky = {
    nombre: 'vicky',
    apellido: 'alonso',
    altura: 1.55
}

var pedro = {
    nombre: 'pedro',
    apellido: 'picapiedra',
    altura: 1.4
}

var lucho = {
    nombre: 'lucho',
    apellido: 'portuano',
    altura: 1.85
}

var elena = {
    nombre: 'elena',
    apellido: 'nito delbosque',
    altura: 1.40
}

var tomas = {
    nombre: 'tomas',
    apellido: 'turbado',
    altura: 1.95
}

var personas = [pepe, vicky, pedro, lucho, elena, tomas]

const ALTO = 1.8
const BAJO = 1.5
const esAlta = ({altura}) => altura >= ALTO
const esBaja = ({altura}) => altura <= BAJO


var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)

console.log(personasAltas)
console.log(personasBajas)