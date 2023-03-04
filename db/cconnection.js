const mysql = require("mysql");

// Create a connection to the database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "employee_tracker_db",
});

// Connect to the database
connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to the database.");
});

// Perform database operations here

// Close the connection when done
connection.end();
