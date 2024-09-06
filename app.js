const names = require('./02_modules/first-module')
const fun1 = require('./02_modules/2-module-utils')
const data = require('./02_modules/3-alternative-way')

console.log(data);


fun1(names.john)
fun1(names.peter)