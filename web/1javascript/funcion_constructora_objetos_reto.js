function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
    this.detalleDelAuto = function(){
        console.log(`Auto: ${this.marca} ${this.modelo} ${this.annio}`);
    }
}

function constructArray(array){
    var array_name = array;
    array = [];
    for(var i = 0; i < 30; ){
        array.push(`${array_name}${i+1}`);
        i++;
    }
    return array;
}

var marcas = constructArray("marcas");
var modelos = constructArray("modelos");
var annios = constructArray("annios");

function constructObjects(x, y, z){
    var coches= [];
    for(var i = 0; i < 30; i++){
        coches.push(new auto(x[i], y[i], z[i]));
    }
    return coches;
}

var cars = constructObjects(marcas, modelos, annios);

function showCars(x){
    for(var i = 0; i < x.length; i++){
        x[i].detalleDelAuto();
    }
}

showCars(cars);