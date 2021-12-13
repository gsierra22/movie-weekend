const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  console.log(req.query)
  const queryText = `SELECT genres.name, movies.title FROM movies
  JOIN movies_genres ON movies.id=movies_genres.movie_id
  JOIN genres ON movies_genres.genre_id=genres.id
  WHERE movies.id=$1`;
  pool.query(queryText)
  .then (result => {
    res.send(result.rows);
  })
  .catch(err =>{
    console.log('Unable to process request')
    res.sendStatus(500)
  })
  
});

module.exports = router;