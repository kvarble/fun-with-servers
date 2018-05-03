let http = require("http");
const PORT = 7000

function handleRequest(request, response) {
    var url = request.url
    response.end("You are the most fantastic person ever")
}

let server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log(`the server is running on port ${PORT}`)
})