var nombre

nombre = "Jorge"

var apellido = 'Mañanes'

var edad = 23

console.log('Hola, soy ' + nombre + ' ' + apellido + '.')
console.log('Tengo ' + edad + ' años.')

var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinusculas = apellido.toLowerCase()

var primeraLetraDelNombre = nombre.charAt(0)
var cantidadDeLetrasDelNombre = nombre.length

var nombreCompleto = nombre + ' ' + apellido

var nombreCompleto2 = `${nombre} ${apellido.toUpperCase()}`

var str = nombre.substr(1, 2)

