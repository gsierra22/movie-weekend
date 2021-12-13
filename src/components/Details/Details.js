import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';
import './Details.css'
import {HashRouter as Router, Route, Link} from 'react-router-dom';


function Details(props) {
  const dispatch = useDispatch();
    const movieDetails = useSelector(store => store.movieDetails);
    const genres = useSelector(store => store.genres);

    useEffect(() => {
        console.log('component did mount');
        // dispatch an action to request the movies from the API
        dispatch({ 
          type: 'FETCH_GENRES',
          payload: movieDetails.id });
  }, []);


  return (
    <div>
      <h1>Details</h1>
      <div>
        <div>Genres:</div>
        {/* <p>{JSON.stringify(genres[id].name)}Hallo</p> */}
        {genres.map(genre => {
          return (
          <div>
            <div>{genre_id.id}</div>
            </div>
            );
            })}
            </div>

            <div>
            <div>{movieDetails.id}</div>
            <div>{movieDetails.title}</div>
            <img className="image" src={movieDetails.poster}/>
            <div>{movieDetails.description}</div>

            </div>
            <button ><Link to="/">Back</Link></button>



    
    </div>
  )
}

export default Details;