var jorge = {
    nombre: 'Jorge',
    apellido: 'Mañanes',
    edad: 23
}

var carlos = {
    nombre: 'Carlos',
    apellido: 'González',
    edad: 34
}

function imprimirPersona(persona){
    console.log(`Hola, me llamo ${persona.nombre} ${persona.apellido} y tengo ${persona.edad} años.`)
}

function cumpleanos(persona){
    persona.edad += 1
}

function cumpleanos2(persona){
    return {
        ...persona,
        edad: persona.edad + 1
    }
}



imprimirPersona(jorge)
imprimirPersona(carlos)
cumpleanos(jorge)
cumpleanos(carlos)
imprimirPersona(jorge)
imprimirPersona(carlos)