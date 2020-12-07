var objeto = {};

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function(){
        console.log(`Auto: ${this.marca} ${this.modelo} ${this.annio}`);
    }
}

miAuto.detalleDelAuto();