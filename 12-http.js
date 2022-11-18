const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Hello World!')
    }
    res.end('<h1>404</h1>')
})

server.listen(5000)