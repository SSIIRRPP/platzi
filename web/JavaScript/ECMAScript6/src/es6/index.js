
// JS

function newFunction (name, age, country){
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}

// ES6

function newFunction2(name = 'oscar', age = 32, country = 'MX'){
    console.log(name, age, country)
}

newFunction2();
newFunction2('jorge', 23, 'ES');

// JS

let hello = 'Hello';
let world = 'world';
let epicphrase= hello + ' ' + world
console.log(epicphrase)

// ES6

let hello2 = 'Hello';
let world2 = 'world';
let epicphrase2 = `${hello2} ${world2}`
console.log(epicphrase2)

// JS

let lorem = "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor \n " 
        +    "(N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. " ;
console.log(lorem);

// ES6

let lorem2 = `Otra frase épica que necesitamos
y otra frase más`;
console.log(lorem2);

// JS

let person = {
    'nombre': 'jorge',
    'edad': 23,
    'pais': 'ES'
};

console.log(person.nombre, person.edad, person.pais);

// ES6

let person2 = {
    'nombre': 'jorge',
    'edad': 23,
    'pais': 'ES'
};

let { nombre, edad, pais } = person2;
console.log(nombre,edad);

// ES6

let team1 = ['oscar', 'julian', 'ricardo'];
let team2 = ['valeria', 'jessica', 'camila'];

let education = ['david', ...team1, ...team2];
console.log(education);

// ES6

{
    var globalVar = 'global var';
}

{
    let globalLet = 'global let';
    console.log(globalLet);
}

console.log(globalVar);
console.log(globalLet);

// ES6

const a = 'b';
console.log(a);
a = 'a'; // reasignacion de const no válida

// JS

let name = 'oscar';
let age = 23;

obj = { name: name, edad: edad};

// ES6

let name2 = 'oscar';
let age2 = 23;

obj2 = {name2, age2 };

console.log(obj2);

// JS

const names = [
    {name: 'jorge', age: 23},
    {name: 'oscar', age: 34}
];

let listOfNames = names.map(function(item){
    console.log(item.name)
    console.log(item.age)
});

// ES6 ARROW FUNCTIONS

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age) => {
    ...
};

const listOfNames4 = name => {
    ...
};

const square = num => num * num;

const helloPromise = () => {
    return new Promise((resolve,reject) => {
        if (false){
            resolve('Hey!');
        }else{
            reject('Ups!');
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    .then(()=> console.log('hola'))
    .catch(error => console.log(error));

class calculator{
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA = valueA
        this.valueB = valueB
        return this.valueA + this.valueB
    }
}

const calc = new calculator();
console.log(calc.sum(2,2))

// ES6 exports/imports

import { hello } from './module';

hello();

// ES6 Generators

function* helloWorld(){
    if (true) {
        yield 'Hello, ';
    }
    if (true){
        yield 'world';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);