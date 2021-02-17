var jorge = {
    nombre: 'Jorge',
    apellido: 'Mañanes',
    edad: 28,
    ingeniero: false,
    productor: true,
    programador: true,
    alpinista: false
}

var pepe = {
    nombre: 'Pepe',
    apellido: 'Pedrolo',
    edad: 12,
    ingeniero: false,
    productor: true,
    programador: true,
    alpinista: false
}

function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es `)
    if (persona.ingeniero === true) {
        console.log('ingeniero')
    }

    if (persona.productor === true) {
        console.log('productor')
    }
    
    if (persona.programador === true) {
        console.log('programador')
    }
    
    if (persona.alpinista === true) {
        console.log('alpinista')
    }
    
}

imprimirProfesiones(jorge)

function imprimirSiEsMayorDeEdad(persona){
    if (persona.edad >= 18){
        console.log(`${persona.nombre} ${persona.apellido} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} ${persona.apellido} es menor de edad`)
    }
}

imprimirSiEsMayorDeEdad(jorge)
imprimirSiEsMayorDeEdad(pepe)

const MAYORIA_DE_EDAD = 18

function esONoMayorDeEdad(persona){
    return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad2(persona){
    if (esONoMayorDeEdad(persona)){
        console.log(`${persona.nombre} ${persona.apellido} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} ${persona.apellido} es menor de edad`)
    }
}

imprimirSiEsMayorDeEdad2(jorge)
imprimirSiEsMayorDeEdad2(pepe)

var esONoMayorDeEdad2 = function(persona){
    return persona.edad >= MAYORIA_DE_EDAD
}

/* ---------ARROW-FUNCTIONS--------- */

const esONoMayorDeEdad3 = /* ( */persona/* ) */ => /* {return */ persona.edad >= MAYORIA_DE_EDAD /* } */;
const esONoMayorDeEdad4 = /* ( */({ edad })/* ) */ => /* {return */ edad >= MAYORIA_DE_EDAD /* } */

function imprimirSiEsMayorDeEdad3(persona){
    if (esONoMayorDeEdad3(persona)){
        console.log(`${persona.nombre} ${persona.apellido} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} ${persona.apellido} es menor de edad`)
    }
}

imprimirSiEsMayorDeEdad3(jorge)
imprimirSiEsMayorDeEdad3(pepe)

function imprimirSiEsMayorDeEdad4(persona){
    if (esONoMayorDeEdad4(persona)){
        console.log(`${persona.nombre} ${persona.apellido} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} ${persona.apellido} es menor de edad`)
    }
}

imprimirSiEsMayorDeEdad4(jorge)
imprimirSiEsMayorDeEdad4(pepe)

function permitirAcceso(persona){
    if (!esONoMayorDeEdad4(persona)){
        console.log('ACCESO DENEGADO WEY')
    }
}