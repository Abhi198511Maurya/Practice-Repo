var foo = 'hello'

function sayHello(name) {
    console.log("Hi, " + name)
}

sayHello("world")

if (true) {
    var x = 10
}

let y = 20
y = 30

const z = 40
z = 50 // ❌ Trying to reassign a const

function unusedFunction() {
    let a = 1
    let b = 2
    return // ❌ no return value
}

sayhello("John") // ❌ typo: function not defined

