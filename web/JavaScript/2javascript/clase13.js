var jorge = {
    nombre: 'Jorge',
    apellido: 'Mañanes',
    edad: 28,
    peso: 80
}

console.log(`Al inicio del año, ${jorge.nombre} pesa ${jorge.peso.toFixed(2)}Kg`)

const CAMBIO_PESO = 0.200
const DIAS_DEL_ANO = 365
const aumentaPeso = (persona) => persona.peso += CAMBIO_PESO
const disminuyePeso = (persona) => persona.peso -= CAMBIO_PESO

for (var i = 1; i <= DIAS_DEL_ANO; i++) {
    var random = Math.random()
    if (random < 0.25){
        aumentaPeso(jorge)
    }else if (random < 0.5){
        disminuyePeso(jorge)
    }else{

    }
}


console.log(`Al final del año, ${jorge.nombre} pesa ${jorge.peso.toFixed(2)}Kg`)
