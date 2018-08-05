// ========================== Dependencies ========================== //
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// ========================== Express Configuration ========================== //

// Tells node that we are creating an express server.
var app = express();

// ========================== Ports========================== //

// Defines a port.
var PORT = process.env.PORT || 8080;

// Sets up the express app to handle data parsing.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

// ========================== Routes ========================== //

require(path.join(__dirname, "./app/routes/apiRoutes"))(app);
require(path.join(__dirname, "./app/routes/htmlRoutes"))(app);

// ========================== Listener ========================== //

//Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Starts the server.
  console.log("Friend Finder app listening on PORT" + PORT);
});
