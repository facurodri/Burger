// Set up MySQL connection.
var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection("lmag6s0zwmcswp5w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com");
} else {
  connection = mysql.createConnection({
    host: "lmag6s0zwmcswp5w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: 'xeme89671s0twuxs',
    password: "vknhvxdmxz2xg914",
    database: "hu75uxgres48m2ap"
  });
}



// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
