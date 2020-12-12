var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

/* function saludarEstudiantes(estudiantes){
    var vuelta = 0;
    while(vuelta < estudiantes.length){
        console.log("Hola " + estudiantes[vuelta] );
        vuelta++;
    }
    console.log(estudiantes)
}

saludarEstudiantes(estudiantes);
 */

 function saludarEstudiante(estudiante){
    console.log("Hola " + estudiante);
 }

while(estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    saludarEstudiante(estudiante);
}
