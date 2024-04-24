const fs = require('fs')

// Sync...

// it returns result or something

// const result = fs.writeFileSync('./intro.txt', 'Hello This is an Intro file')

// Async

// but in this case, it always expect a () => func, fro you, and throw an error if there is, and reaults

// fs.writeFile('./intro.txt', 'Hello This is an Intro file with aync func',(err) => {})

// for read file

// Sync... // same in that case as well, Sync give you a return something

// const result = fs.readFileSync('./Contects.txt','utf-8')

// console.log(result);


// for async, it expeacts call back and give a results in that

fs.readFile('./Contects.txt','utf-8',(err, result) => {
    if (err) {

        console.error('error',err)
        
    } else {
        
        console.log(result);
    }
})