// Dependencies
var http = require("http");
var fs = require("fs");
// Set our port to 8080
var PORT = 8080;
// Create our server
var server = http.createServer(handleRequest);
// Create a function for handling the requests and responses coming into our server
function handleRequest(req, res) {
    var path = req.url;
    switch (path){
        case "/":
        return displayRoot(path, req, res);
        case "/favorite_food":
        return displayFavoriteFoods(path, req, res);
        case "/favorite_movie":
        return displayFavoriteMovies(path, req, res);
        default:
        return display404(path, req, res);
    }
}
  // Here we use the fs package to read our index.html file
  function displayRoot(url, req, res){
  fs.readFile(__dirname + "/index_one.html", function(err, data) {
    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  
  });

}
function displayFavoriteFoods(url, req, res){
    fs.readFile(__dirname + "/index_two.html", function(err, data) {
      // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
      // an html file.
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    
    });
  
  }
  function displayFavoriteMovies(url, req, res){
    fs.readFile(__dirname + "/index_three.html", function(err, data) {
      // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
      // an html file.
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    
    });
  
  }
  function display404(url, req, res){
    fs.readFile(__dirname + "/index404.html", function(err, data) {
      // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
      // an html file.
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    
    });
  
  }
// Starts our server
server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});