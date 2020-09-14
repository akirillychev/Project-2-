//require mysql
var mysql = require("mysql");

// set up connection 
var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "rootroot",
    database: "chucknorris"
});

// connect to database
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

  //export connection
  module.exports = connection;
  
