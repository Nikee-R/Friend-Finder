// ================ Dependencies ================ //
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// ================ Functions ================ //

// Defines a port.
var PORT = 8080

function handleRequest(req, res) {
  
  // Send the below string to the client when the user visits the POST URL
  res.end("Connection works!" + req.url);
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);

//Start our server so that it can begin listening to client requests.
server.listen(PORT, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
