const router = require('express').Router();
const fs = require('fs');

router.get('/notes', (req, res) => {
    fs.readFile('./db/db.json', (data, err) => {
        if(data) {
            let notes = JSON.parse(data);
            res.json(notes);
        } else {
            throw err;
        }
    });
});