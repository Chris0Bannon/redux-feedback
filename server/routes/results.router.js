const express = require('express');
const router = express.Router();

const pool = require('../modules/pool')

router.post('/', (req,res) => {
    let newResults = req.body;
    console.log( 'adding result', newResults);
     let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;

    pool.query(queryText, [newResults.feeling, newResults.understanding, newResults.support, newResults.comments])
    .then(result => {
        res.sendStatus(201)
    })
    .catch(error => {
        console.log(error);
        res.sendStatus(500) 
    });
    });

    module.exports = router;