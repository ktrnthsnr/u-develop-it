//-- from server.js, moved here to isolate and modularize the code

const sqlite3 = require('sqlite3').verbose();

// Connect to database
const db = new sqlite3.Database('./db/election.db', err => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the election database.');
});

// -- export 
module.exports = db;  