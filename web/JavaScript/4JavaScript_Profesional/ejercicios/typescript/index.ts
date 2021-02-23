/* console.log("hello typescript");

function add(a: number, b: number): number {
  return a + b;
}

const sum = add(2, 3);

function createAdder(a: number): (number) => number {
  return function (b: number) {
    return b + a;
  };
}

const addFour = createAdder(4);
const fourPlusSix = addFour(6); */
/* 
function fullName(firstName: string, lastName: string = "Smith"): string {
  return `${firstName} ${lastName}`;
}

const richard = fullName("Richard");
console.log(richard);
 */
enum Color {
  Rojo = "Rojo",
  Verde = "Verde",
}

interface Rectangulo {
  ancho: number;
  alto: number;
  color?: Color;
}

let rect: Rectangulo = {
  ancho: 4,
  alto: 5,
  color: Color.Rojo,
};

function area(r: Rectangulo): number {
  return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);

rect.toString = function () {
  return this.color
    ? `Un rectangulo ${this.color}`
    : `Un rectángulo sin color.. :(`;
};

console.log(rect.toString());
