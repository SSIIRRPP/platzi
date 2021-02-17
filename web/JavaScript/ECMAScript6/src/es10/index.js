Object.defineProperty(Array.prototype, 'flat', {
    value: function(depth = 1) {
      return this.reduce(function (flat, toFlatten) {
        return flat.concat((Array.isArray(toFlatten) && (depth>1)) ? toFlatten.flat(depth-1) : toFlatten);
      }, []);
    }
});

let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat());

let array2 = [1,2,3,4,5]

console.log(array2.flatMap(value => [value, value * 2]))

let hello = '             hello world'

console.log(hello)

console.log(hello.trimStart())

let hello2 = 'hello world             '

console.log(hello2)

console.log(hello2.trimEnd())

try {

}catch{
    error
}

let entries = [["name", "oscar"],["age", 32]];
console.log(Object.fromEntries(entries))

let mySymbl = `my symbolou`
let symbol = Symbol(mySymbl)
console.log(symbol.description)