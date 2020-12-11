
const ALTURA = 1.8
const esONoAlto = ({ altura }) => altura >= ALTURA

class Persona{
    constructor(nombre, apellido, edad, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.altura = altura
    }

    saludar(fn){
        var { nombre, apellido } = this
        console.log(`Hola, me llamo ${nombre} ${apellido}` )
        if (fn){
            fn(nombre, apellido, false)
        }
    }

    esAlto(){
        if (esONoAlto(this)){
            console.log(`${this.nombre} es alto`)
        }else{
            console.log(`${this.nombre} no es alto`)
        }
    }
}

/* Persona.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}` )
}

Persona.prototype.esAlto = function(){
    if (esONoAlto(this)){
        console.log(`${this.nombre} es alto`)
    }else{
        console.log(`${this.nombre} no es alto`)
    }
}
 */
class Desarrollador extends Persona{
    constructor(nombre, apellido, edad, altura){
        super(nombre, apellido, edad, altura)}

    saludar(fn){
        var { nombre, apellido } = this
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador.`)
        if (fn){
            fn(nombre, apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen día ${nombre} ${apellido}`)
    if (esDev) {
        console.log(`Ah mirá boludo, no sabía que sos desarroshador`)
    }
}


var jorge = new Persona('Jorge', 'Mañanes', 23, 1.90)
var pepe = new Persona('Pepe', 'Rodriguez', 65, 1.65)
var david = new Desarrollador('David', 'Dominguez', 43, 1.78)

var personas = [jorge, pepe, david]

for (persona of personas){
    persona.saludar(responderSaludo)
    persona.esAlto()
}

