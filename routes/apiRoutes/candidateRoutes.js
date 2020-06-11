const express = require('express');
const router = express.Router();
const db = require('../../db/database');
const inputCheck = require('../../utils/inputCheck');

// originally app.get('/api/candidates')
router.get('/candidates', (req, res) => {
    /// -- API Endpoint to | get ALL candidates, a select statement wrapped in an Express.js get route
   // --- Test if working: 
    // -- 1) restart server $ npm start 
    // -- 2) open browser to local endpoint URL http://localhost:3003/api/candidates
// app.get('/api/candidates', (req, res) => {
    // const sql = `SELECT * FROM candidates`;
    // -- added join query
    const sql = `SELECT candidates.*, parties.name 
             AS party_name 
             FROM candidates 
             LEFT JOIN parties 
             ON candidates.party_id = parties.id`;
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

  
// app.get('/api/candidate/:id')
router.get('/candidate/:id', (req, res) => {
        // -- API Endpoint to retrieve | Get single candidate , wrapped in an Express.js get route
        // -- Test with sample ID=1: restart $ npm start then open browser to
        // --  API endpoint to test in browser or Insomnia tool, GET http://localhost:3003/api/candidate/1
// app.get('/api/candidate/:id', (req, res) => {
    // -- added join query
    const sql = `SELECT candidates.*, parties.name
             AS party_name 
             FROM candidates
             LEFT JOIN parties 
             ON candidates.party_id = parties.id 
             WHERE candidates.id = ?`;
                    // const sql = `SELECT * FROM candidates 
                    //              WHERE id = ?`;
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

  
// app.post('/api/candidate')
router.post('/candidate', ({ body }, res) => {
// -- API Endpoint to | Create a candidate  (requires a /utils/inputCheck() module, added at the top)
  // -- Test with sample ID=1: restart $ npm start then open browser to
  // -- test with Insomnia on this endpoint: POST http://localhost:3003/api/candidate
//   app.post('/api/candidate', ({ body }, res) => {
    const errors = inputCheck(body, 'first_name', 'last_name', 'industry_connected');

     if (errors) {
      res.status(400).json({ error: errors });
      return;
    }

    const sql = `INSERT INTO candidates (first_name, last_name, industry_connected) 
              VALUES (?,?,?)`;
    const params = [body.first_name, body.last_name, body.industry_connected];
    // ES5 function, not arrow function, to use `this`
    db.run(sql, params, function(err, result) {
        if (err) {
            res.status(400).json({ error: res.message });
            return;
          }

    res.json({
        message: 'success',
        data: body,
        id: this.lastID
        });
      });
  });

  
// app.put('/api/candidate/:id')
router.put('/candidate/:id', (req, res) => {
        // -- API Endpoint to update | PUT to update a single candidate , wrapped in an Express.js get route
        // -- Test with sample ID=1: restart $ npm start then open browser to
        // --  API endpoint to test in browser or Insomnia tool, PUT http://localhost:3003/api/candidate/1
    // app.put('/api/candidate/:id', (req, res) => {
    // -- validate party_id was provided, check before sql variable declaration
    const errors = inputCheck(req.body, 'party_id');
    if (errors) {
      res.status(400).json({ error: errors });
      return;
    }
  // -- sql update statement
  const sql = `UPDATE candidates SET party_id = ? 
               WHERE id = ?`;
  const params = [req.body.party_id, req.params.id];

  db.run(sql, params, function(err, result) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }

    res.json({
      message: 'success',
      data: req.body,
      changes: this.changes
    });
  });
});
  
// app.delete('/api/candidate/:id')
router.delete('/candidate/:id', (req, res) => {
      // -- API Endpoint to | Delete a candidate, wrapped in an Express.js get route
        // -- Test with sample ID=1: restart $ npm start then open browser to
        // --  test delete in Insomnia for ex: DELETE http://localhost:3003/api/candidate/1
        // app.delete('/api/candidate/:id', (req, res) => {
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


module.exports = router;