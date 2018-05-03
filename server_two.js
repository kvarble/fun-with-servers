let http = require("http");
const PORT = 7500

function handleRequest(request, response) {
    var url = request.url
    response.end("You must be tired...")
}

let server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log(`the server is running on port ${PORT}`)
})