// -- import express module
const express = require('express');

// -- add PORT
const PORT = process.env.PORT || 3003;
const app = express();

//-- add Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// -- functions

// -- test the PORT connection //-- test by running $ npm start & http://localhost:3003 (not https!)
app.get('/', (req, res) => {
    res.json({
      message: 'Hello World'
    });
  });

//--place after all GET
//  -- Default response for any other request(Not Found) Catch all  
app.use((req, res) => {
    res.status(404).end();
  });

// --- listen
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

