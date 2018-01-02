const express = require('express');
const router = express.Router();
const queries = require('../db/queries');

router.get('/log', (req,res,next) => {
  queries.getAll().then(logs => {
    res.status(200).json(logs);
  })
})

router.post('/log', (req,res,next) => {
  let addLog = req.body;
  queries.addLog().then(log => {
    res.status(200).json(log[0]);
  })
})
