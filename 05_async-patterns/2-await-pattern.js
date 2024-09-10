const {readFile, writeFile} = require('fs').promises

// const util = require('util')

// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const catchData = async() => {
    
    try{
        
        const first = await readFile('./content/first.txt', 'utf8')
        const second = await readFile('./content/second.txt', 'utf8')

        await writeFile('./content/result.txt',`Hello welcome to the Kapil Sharma Show ${first} and ${second}`,{ flag : 'a'})
        console.log(first, second);
        
    }
    
    catch(error){
        
        console.log(error);
        
    }
}

catchData()



// const getData = (path) => {

//     return new Promise( (resolve, reject) => {

//     readFile(path, 'utf8', (err, data) =>  {

//         if(err){

//             reject(err)
//         }
        
//         else{
    
//             resolve(data)
//         }    

//     })    

//     } )

// }

// getData('./content/first.txt').
// then( (result) =>  console.log(result))
// .catch( (err) =>  console.log(err))