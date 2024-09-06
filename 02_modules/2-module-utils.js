// const {john, peter } = require('./first-module') // 1st way is restructing
const names = require('./first-module') // 2nd way is by using Objects

const sayHi = (name) =>{

    console.log(`Hey there ${name}`);
    
}

module.exports = sayHi
