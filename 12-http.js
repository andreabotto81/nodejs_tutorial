const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('<h1>This is the first page</h1>')
    } else if (req.url === '/about') {
        res.end('<h3>This is the about page</h3>')
    } else
        res.end(`<h1>Ooops</h1>
        <p>we can't seem to find the page</p>
        <a href='/'>Back home</a>`)
})

server.listen(5000)