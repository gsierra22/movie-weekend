const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  console.log(req.query)
  const query = `SELECT name FROM movies
  JOIN movies_genres ON movies.id=movies_genres.movie_id
  JOIN genres ON movies_genres.genre_id=genres.id
  WHERE movies.id=${req.query.id}
  `;
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