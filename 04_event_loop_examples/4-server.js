const http  = require('http')

const server = http.createServer( (req, res) => {

    console.log('request event');
    res.end('Hello World')
    
})

server.listen(5000, ()=> { // The peocess is stay alive, because Liste is Aync

    console.log("Server is listening on port : 5000....");
    
})