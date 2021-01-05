require("dotenv").config();

var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.sqlPassword,
  database: "burgers_db",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected with ID: " + connection.threadId);
});

module.exports = connection;
