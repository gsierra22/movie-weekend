import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';


function Details(props) {
  
  const dispatch = useDispatch();
    const movieDetails = useSelector(store => store.movieDetails);

    useEffect(() => {
        console.log('component did mount');
        // dispatch an action to request the movies from the API
    }, []); 


  return (
    <div>
      <h1>Details</h1>
            <div>{movieDetails.id}</div>
            <div>{movieDetails.title}</div>
            <img src={movieDetails.poster}/>
            <div>{movieDetails.description}</div>
            <button ><Link to="/">Back</Link></button>


    
    </div>
  )
}

export default Details;