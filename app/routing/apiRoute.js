// ================ Dependencies ================ //

var friends = require("../data/friends");

// ================ Routing ================ //


module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.

  app.get("/api/friends", function(req, res) {
    res.json(tableData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array


  // This function handles the compatibility between users who have completed their surveys.
  app.post("/api/friends", function(req, res) {

    //}
  //});

  // This code clears out the data at the end.
  //app.post("/api/clear", function() {
    // Empty out the arrays of data

    //console.log();
  });
};
