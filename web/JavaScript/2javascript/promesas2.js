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
                resolve(resultado)
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

/* 
obtenerPersonaje(1)
    for (var i = 1; i<20; i++){
        Promise
        .then(onSuccess)
    }
     */



