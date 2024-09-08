const http = require('http');

const server = http.createServer( (req, res) => { // create server takes callback funcion with request and response

    if(req.url === '/'){ // request use for provide any Url req to server

        res.end('Welcome to my Home page') // it helps to chack ur page is showing something or not // alwys need to end response
    }

    else if(req.url === '/about'){

        res.end('This is my about page')
    }

    else{

        res.end(`
            <h1>Oops!</h1>
            <p>We can't seem to find the page you are looking for</p>
            <a href="/">back home</a>
            `)
    }
} )

server.listen('5000') // this method use as listener on localhost:5000