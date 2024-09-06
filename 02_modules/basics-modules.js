// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const john = 'john'
const peter = 'peter'

const sayHi = (name) =>{

    console.log(`Hey there ${name}`);
    
}

sayHi("Yash")
sayHi(john)
sayHi(peter)