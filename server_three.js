let http = require("http");
const PORTONE = 7000;
const PORTTWO = 7500

function handleRequestOne(request, response) {
    var url = request.url
    response.end("You are the most fantastic person ever")
}

function handleRequestTwo(request, response) {
    var url = request.url
    response.end("You must be tired...")
}

let serverOne = http.createServer(handleRequestOne);
let serverTwo = http.createServer(handleRequestTwo);

server.listen(PORT, function(){
    console.log(`the server is running on port ${PORT}`)
})