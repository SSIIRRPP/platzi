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
    altura: 1.60
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

/* console.log(personas[0].altura)
console.log(personas[0]['altura']) */

for (var i = 0; i < personas.length; i++){
    console.log(`${personas[i].nombre} mide ${personas[i].altura} metros`)
}