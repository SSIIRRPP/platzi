console.log('a1')
setTimeout(() => console.log('b1'), 2000)
console.log('c1')

console.log('a2')
setTimeout(() => console.log('b2'), 0)
console.log('c2')

