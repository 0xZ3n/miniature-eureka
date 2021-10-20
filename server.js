const express = require('express');

const app = express();

const {db} = require('./db/db');
















app.get('/api/db', (req, res) => {
    let results = db;
    //res.send('Hello');
    res.json(resuls);
})



app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });