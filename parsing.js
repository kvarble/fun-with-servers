let http = require("http");
const PORT = 7000

function handleRequest(req, res) {
    var path = req.url
    // switch (path) {
    //     case  "/"
    //     {}
    // }
}

let server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log(`the server is running on port ${PORT}`)
})