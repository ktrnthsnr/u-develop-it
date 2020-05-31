//-- Usage: to run this script, enter in the terminal
// -- $ npm start 
// -- Then open a browser to view  http://localhost:3003/api/candidates (not https!)

// --------  requires, PORT, and middleware  --------- //

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

// --------  connect to database  --------- //

const db = new sqlite3.Database('./db/election.db', err => {
    if (err) {
      return console.error(err.message);
    }  
    console.log('Connected to the election database.');
  });

// --------  routes --------- //

// -- test the PORT connection 
  // -- To view 'Hello World', open a browser to view  http://localhost:3003 (not https!)
app.get('/', (req, res) => {
    res.json({
      message: 'Hello World'
    });
  });


// -- API Endpoint to | get ALL candidates, a select statement wrapped in an Express.js get route
   // --- Test if working: 
    // -- 1) restart server $ npm start 
    // -- 2) open browser to local endpoint URL http://localhost:3001/api/candidates
app.get('/api/candidates', (req, res) => {
    const sql = `SELECT * FROM candidates`;
    const params = [];
    db.all(sql, params, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }  
      res.json({
        message: 'success',
        data: rows
      });
    });
  });

// -- API Endpoint to retrieve | Get single candidate 
  // -- Test with sample ID=1: restart $ npm start then open browser to
  // --  API endpoint http://localhost:3001/api/candidate/1
app.get('/api/candidate/:id', (req, res) => {
    const sql = `SELECT * FROM candidates 
                 WHERE id = ?`;
    const params = [req.params.id];
    // -- database method get() or db.get is nested in an app.get
    db.get(sql, params, (err, row) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }  
      res.json({
        message: 'success',
        data: row
      });
    });
  });


// -- API Endpoint to | Delete a candidate
  // -- Test with sample ID=1: restart $ npm start then open browser to
  // --  API endpoint to test in Insomnia for ex: http://localhost:3001/api/candidate/1
app.delete('/api/candidate/:id', (req, res) => {
    const sql = `DELETE FROM candidates WHERE id = ?`;
    const params = [req.params.id];
    db.run(sql, params, function(err, result) {
      if (err) {
        res.status(400).json({ error: res.message });
        return;
      }
  
      res.json({
        message: 'successfully deleted',
        changes: this.changes
      });
    });
  });


//--place 404 catch all   *after*   all GET
//  -- Default response for any other request(Not Found) Catch all  
app.use((req, res) => {
    res.status(404).end();
  });

// --------  functions --------- //

// Create a candidate
        // const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected) 
        //             VALUES (?,?,?,?)`;
        // const params = [1, 'Ronald', 'Firbank', 1];
        // // ES5 function, not arrow function, to use this
        // db.run(sql, params, function(err, result) {
        // if (err) {
        //     console.log(err);
        // }
        // console.log(result, this.lastID);
        // });

// -- test the db connection, get ALL candidates - simple
            // db.all(`SELECT * FROM candidates`, (err, rows) => {
            //     console.log(rows);
            // });


// GET a single candidate, sample w/hardcoded WHERE id = 1
            // db.get(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
            //     if(err) {
            //       console.log(err);
            //     }
            //     console.log(row);
            //   });
 
            
// Delete a candidate
        // db.run(`DELETE FROM candidates WHERE id = ?`, 1, function(err, result) {
        //     if (err) {
        //       console.log(err);
        //     }
        //     console.log(result, this, this.changes);
        //   });



// --------  event handler --------- //

// -- Listen / start server after DB connection
//   -- wrapping the Express.js server in the db connection, in event handler.
db.on('open', () => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  });


// // --- previous listen
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });

