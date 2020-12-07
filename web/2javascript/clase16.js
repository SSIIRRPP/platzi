var signo = prompt('¿Cuál es tu signo?').toLowerCase()

switch(signo){
    case 'acuario':
        console.log('eres acuario. felicidades. eres especial')
        break
    case 'cancer':
    case 'cáncer':
        console.log('eres cancer. felicidades. eres especial')
        break
    case 'piscis':
        console.log('eres piscis. felicidades. eres especial')
        break
    default:
        console.log('muy bien, no crees en patrañas, champion')
}

/* if (signo === 'acuario'){
    console.log('eres acuario. felicidades. eres especial')
}
if (signo === 'cancer'){
    console.log('eres caner. felicidades. eres especial')
}
if (signo === 'piscis'){
    console.log('eres piscis. felicidades. eres especial')
} */