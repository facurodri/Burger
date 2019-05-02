// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
      console.log("------- All: ",res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
      console.log("------- Create: ",res);
    });
  },
  update: function(id, newStatus, cb) {
      var condition = "id=" + id + "";
    orm.update("burgers", { devoured : newStatus }, condition, cb);
  },
  delete: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
      cb(res);
      console.log("------- Delete: ",res);
    });
  }
};

// Export the database functions for the controller (burgers_Controller.js).
module.exports = burger;
