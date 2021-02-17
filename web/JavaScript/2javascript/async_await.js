const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true }

function obtenerPersonaje(id){
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

        $
            .get(url, opts, function (data) {
                var resultado = [data, id]
                resolve(data)
            })
            .fail(() => reject(id))

    })
}

function onSuccess(resultado){
    console.log(`El personaje ${resultado[1]} es ${resultado[0].name}`)
    return obtenerPersonaje(resultado[1] + 1)
}

function onError(id){
    console.log(`Sucedio un error al obtener el personaje ${id}`)
}

async function obtenerPersonajes(){
    var ids = [1, 2, 3, 4, 5, 6, 7]
    var promesas = ids.map( id => obtenerPersonaje(id))
    try{
        var personajes = await Promise.all(promesas)
        console.log(personajes)
    }catch ( id ) {
        onError(id)
    }
}

obtenerPersonajes()


/* var promesas = ids.map(function (id) {
    return obtenerPersonaje(id)
}) */


/* obtenerPersonaje(1)
    .then(onSuccess)
    .then(onSuccess)
    .then(onSuccess)
    .then(onSuccess)
    .then(onSuccess)
    .then(onSuccess)
    .catch(onError) */


/* obtenerPersonaje(1)
    .then(onSuccess)
    .catch(onError)
    .then(
        obtenerPersonaje(2)
            .then(onSuccess)
            .catch(onError)
    ) */


/* obtenerPersonaje(1, function (personaje) {
    console.log(`Hola, soy ${personaje.name}`)

    obtenerPersonaje(2, function (personaje) {
        console.log(`Hola, soy ${personaje.name}`)

        obtenerPersonaje(3, function (personaje) {
            console.log(`Hola, soy ${personaje.name}`)

            obtenerPersonaje(4, function(personaje) {
                console.log(`Hola, soy ${personaje.name}`)

                obtenerPersonaje(5 ,function(personaje){
                    console.log(`Hola, soy ${personaje.name}`)

                })
            })
        })
    })
}) */

