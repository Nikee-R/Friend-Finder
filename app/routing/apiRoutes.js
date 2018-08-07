// ========================== Load Data ========================== //
// This will link the routes to data source friends.
var friends = require("../data/friends");
var path = require("path");

// ================ Routing ================ //

module.exports = function(app) {

  // API GET Requests
  // Below code handles when users "visit" a page.

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  app.post("/api/friends", function(req, res) {

    // Grabs user input.
    var userInput = req.body.scores;

    // Handles the match-making.
    var scoresArr = [];
    var friendMatch = 0;

    // Runs through friend array.
    for (var i = 0; i < friends.length; i++) {
      
      // Handles the differences between scores.
      var difference = 0;

      // Compares friends.
      for (var j = 0; j < userInput.length; j++) {
        difference += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(userInput[j])));
      }

      // Pushes scores into array.
      scoresArr.push(difference);
    }
      // Records the matched friend with the lowest difference in score.
 for (var i = 0; i < scoresArr.length; i++) {
  if (scoresArr[i] <= scoresArr[friendMatch]) {
    friendMatch = i;
  }
 }
// Returns best match.
var bestMatch = friends[friendMatch];
res.json(bestMatch);

 // Pushes new data.
 friends.push(req.body);
});
};
