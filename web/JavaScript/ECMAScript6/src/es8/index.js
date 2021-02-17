const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana'
}

const entries = Object.entries(data);
console.log(entries)
console.log(entries.length)



const data = {
frontend: 'Oscar',
backend: 'Isabel',
design: 'Ana',
}

const values = Object.values(data)
console.log(values)
console.log(values.length)



const string = 'hello'
console.log(string.padStart(7, 'hi'))
console.log(string.padEnd(12, '-----'))
console.log('food'.padEnd(12, ' -----'))

const obj = {
    name: 'oscar',
}

// ES8 ASYNC / AWAIT

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (false)
        ? setTimeout(() => resolve('Hello world'), 3000)
        : reject(new Error('Test Error'))
    })
};

const HelloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello)
}

HelloAsync()

const anotherFunction = async () => {
    try {
        const hello = await helloWorld()
        console.log(hello)
    } catch (error) {
        console.log(error)
    }
}

anotherFunction()