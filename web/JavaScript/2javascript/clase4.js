var nombre = 'Jorge', edad = 23

function imprimirEdad(nombre, edad){
    console.log(`${nombre} tiene ${edad} años`)
}

var jorge = {
    nombre: 'Jorge',
    apellido: 'Mañanes',
    edad: '23'
}

var carlos = {
    nombre: 'Carlos',
    apellido: 'González',
    edad: '34'
}

function imprimirEdadObjeto(persona){
    console.log(persona.edad)
}

function imprimirEdadObjetoPorLlave({edad}){
    console.log(edad)
}

imprimirEdad(nombre, edad)
imprimirEdadObjeto(jorge)
imprimirEdadObjetoPorLlave(jorge)

function accederALlave(persona){
    /* var nombre = persona.nobmre */
    var { nombre } = persona
    console.log(nombre)
}

accederALlave(jorge)

function imprimirPersona(persona){
    console.log(`Hola, me llamo ${persona.nombre} ${persona.apellido} y tengo ${persona.edad} años.`)
}

imprimirPersona(jorge)
imprimirPersona(carlos)