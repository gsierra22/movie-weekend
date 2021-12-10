const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  console.log(req.query)
  const query = ''
  ;
  pool.query(query)
  .then (result => {
    res.send(result.rows);
  })
  .catch(err =>{
    console.log('Unable to process request')
    res.sendStatus(500)
  })
  
});

module.exports = router;