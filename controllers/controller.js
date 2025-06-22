var foo = 'hello' // 'foo' is assigned a value but never used

function sayHello(name) {
    console.log("Hi, " + name)
}

sayHello("world")

if (foo === "hello") { // Unexpected constant condition
    var x = 10 // 'x' is assigned a value but never used
}

let y = 20 // 'y' is assigned a value but never used
y = 30

const z = 40
// z = 50 // 'z' is constant & 'z' is assigned a value but never used

function unusedFunction() { // 'unusedFunction' is defined but never used
    let a = 1 // 'a' is assigned a value but never used
    let b = 2 // 'b' is assigned a value but never used
    return // ❌ no return value
}

sayHello("John") // 'sayhello' is not defined

