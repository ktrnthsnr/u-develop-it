// -- import express module
const express = require('express');
// -- import the sqlite3 module
const sqlite3 = require('sqlite3').verbose();

// -- add PORT
const PORT = process.env.PORT || 3003;
const app = express();

//-- add Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = new sqlite3.Database('./db/election.db', err => {
    if (err) {
      return console.error(err.message);
    }  
    console.log('Connected to the election database.');
  });


// -- functions

// -- test the PORT connection //-- test by running $ npm start & http://localhost:3003 (not https!)
app.get('/', (req, res) => {
    res.json({
      message: 'Hello World'
    });
  });


// -- test the db connection
  db.all(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
  });

//--place after all GET
//  -- Default response for any other request(Not Found) Catch all  
app.use((req, res) => {
    res.status(404).end();
  });



// -- Start server after DB connection,
    // -- wrapping the Express.js server in the db connection, in event handler.
db.on('open', () => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  });



// // --- previous listen
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });

