function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
    this.detalleDelAuto = function(){
        console.log(`Auto: ${this.marca} ${this.modelo} ${this.annio}`);
    }
}

var miAuto = new auto("Audi", "A3", 2020);
miAuto.detalleDelAuto();