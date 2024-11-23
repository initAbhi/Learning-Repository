const http = require("http")

let server = http.createServer((req, res) => {
console.log(req.method);
res.setHeader('Content-Type', 'text/html')
res.write("<h1>Hello</h1>")
res.end()

})

const port = 3000
server.listen(port, () => {
    console.log(`your server is running at http://localhost:3000`)
})