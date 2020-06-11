const express = require('express');
const router = express.Router();
const db = require('../../db/database');
const inputCheck = require('../../utils/inputCheck.js');

//-- GET route for /voters (SELECT ALL VOTERS)
    // -- validate in Insomnia http://localhost:3003/api/voters
router.get('/voters', (req, res) => {
    const sql = `SELECT * FROM voters ORDER BY last_name`;
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

//-- GET route to get an individual Voter  (SELECT ALL BY ID)
  // -- validate in Insomnia http://localhost:3003/api/voter/42
router.get('/voter/:id', (req, res) => {
    const sql = `SELECT * FROM voters WHERE id = ?`;
    const params = [req.params.id];
  
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


 // -- POST route to create a voter (INSERT)
    // -- validate in Insomnia, POST http://localhost:3003/api/voter
    // -- insert test data
            // {
            // 	"first_name": "Aniko",
            //     "last_name": "Cascade",
            //     "email": "aniko@email.com"
            // }
router.post('/voter', ({ body }, res) => {
    const errors = inputCheck(body, 'first_name', 'last_name', 'email');
    if (errors) {
        res.status(400).json({ error: errors });
        return;
      }
    const sql = `INSERT INTO voters (first_name, last_name, email) VALUES (?,?,?)`;
    const params = [body.first_name, body.last_name, body.email];
  
    db.run(sql, params, function(err, data) {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
  
      res.json({
        message: 'success',
        data: body,
        id: this.lastID
      });
    });
  });


// -- PUT route  (UPDATE BY ID)
// -- validation within Insomnia, PUT http://localhost:3003/api/voter/51
    // -- insert test data
        // {
        //     "email": "aniko@gmail.com"
        // }

router.put('/voter/:id', (req, res) => {
  // Data validation
  const errors = inputCheck(req.body, 'email');
  if (errors) {
    res.status(400).json({ error: errors });
    return;
  }
  // Prepare statement
  const sql = `UPDATE voters SET email = ? WHERE id = ?`;
  const params = [req.body.email, req.params.id];
  // Execute
  db.run(sql, params, function(err, data) {
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

// -- DELETE route
// -- validate in Insomnia, DELETE http://localhost:3003/api/voter/20
router.delete('/voter/:id', (req, res) => {
    const sql = `DELETE FROM voters WHERE id = ?`;
  
    db.run(sql, req.params.id, function(err, result) {
      if (err) {
        res.status(400).json({ error: res.message });
        return;
      }
  
      res.json({ message: 'deleted', changes: this.changes });
    });
  });


module.exports = router;