const express = require('express');
const router = express.Router();

const pool = require('../modules/pool')

router.post('/', (req,res) => {
    let newResults = req.body;
    console.log( 'adding result', newResults);
     let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;

    pool.query(queryText, [])
    })