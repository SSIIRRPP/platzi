var seleccion1 = null;
var seleccion2 = null;

function ppt_comparision(seleccion1, seleccion2){
    var seleccion3 = seleccion1 + "|" + seleccion2
    switch (seleccion3){
        case "piedra|tijeras":
            console.log("Piedra gana.");
            break;
        case "piedra|papel":
            console.log("Papel gana.");
            break;
        case "piedra|piedra":
            console.log("Empate!");
            break;
        case "papel|tijeras":
            console.log("Tijeras gana.");
            break;
        case "papel|piedra":
            console.log("Papel gana.");
            break;
        case "papel|papel":
            console.log("Empate!");
            break;
        case "tijeras|tijeras":
            console.log("Empate!");
            break;
        case "tijeras|papel":
            console.log("Tijeras gana.");
            break;
        case "tijeras|piedra":
            console.log("Piedra gana");
            break;
        default:
            console.log("Selecciona dos valores válidos!")
    }
}