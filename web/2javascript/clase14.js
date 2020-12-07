var jorge = {
    nombre: 'Jorge',
    apellido: 'Mañanes',
    edad: 28,
    peso: 80
}

console.log(`Al inicio del año, ${jorge.nombre} pesa ${jorge.peso.toFixed(2)}Kg`)

const CAMBIO_PESO = 0.300
const DIAS_DEL_ANO = 365
const aumentaPeso = (persona) => persona.peso += CAMBIO_PESO
const disminuyePeso = (persona) => persona.peso -= CAMBIO_PESO
const comeMucho = () => Math.random() < 0.3
const haceDeporte = () => Math.random() < 0.4
const META = jorge.peso - 3

var dias = 0;

while(jorge.peso > META){
    if(comeMucho()){
        aumentaPeso(jorge)
    }
    if(haceDeporte()){
        disminuyePeso(jorge)
    }
    dias += 1
}


console.log(`Pasaron ${dias} dias hasta que ${jorge.nombre} alcanzó la meta.`)
