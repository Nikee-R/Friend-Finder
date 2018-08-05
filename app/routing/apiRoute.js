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
    var userInput = req.body;

    // Grabs user responses.
    var userResponse = userInput.scores;

    // Handles the match-making.
    var friendMatch = "";
    var friendImage = "";
    var totalDiff = 0;

    // Runs through friend array.
    for (var i = 0; i < friends.length; i++) {

      // Handles the differences between scores.
      var difference = 0;
      for (var j = 0; j < userResponse.length; j++) {
        difference += Math.abs(friends[i].scores[j] - userResponse[j]);
      }

      // Records the matched friend with the lowest difference in score.
      if (difference < totalDiff) {
        totalDiff = difference;
        friendMatch = friends[i].name;
        friendImage = friends[i].photo;
      }
    }

    // Adds new user.
    friends.push(userInput);

    // Sends response.
    res.json({status: "Matched", friendMatch: friendMatch, friendImage: friendImage});
  });
};
