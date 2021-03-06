// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the burgers
  app.get("/api/burgerss", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Todo.findAll({}).then(function(dbBurgers) {
      // We have access to the burgers as an argument inside of the callback function
      res.json(dbBurgers);
    });
  });

  // POST route for saving a new todo
  app.post("/api/burgerss", function(req, res) {
    console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Burgers.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function(dbBurgers) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbBurgers);
    });
  });

  // DELETE route for deleting burgers. We can get the id of the todo we want to delete from
  // req.params.id
  app.delete("/api/burgers/:id", function(req, res) {

  });

  // PUT route for updating burgers. We can get the updated todo from req.body
  app.put("/api/burgers", function(req, res) {

  });
};
