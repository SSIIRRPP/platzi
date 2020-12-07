var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes (estudiantes) {
    for(var i = 0; i < estudiantes.length;){
        console.log('Hola '+ estudiantes[i]);
        i++;
    }
}

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantesAlternativo (estudiantes) {
    for(var estudiante of estudiantes){
        console.log('Hola '+ estudiante);
    }
}

saludarEstudiantesAlternativo (estudiantes);