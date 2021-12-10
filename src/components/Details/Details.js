import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';


function Details(props) {
  
  const dispatch = useDispatch();
    const plantList = useSelector(store => store.plantList);

    useEffect(() => {
        console.log('component did mount');
        getPlant();
        // dispatch an action to request the plantList from the API
    }, []); 

    const getPlant = () =>{
        console.log( 'getting plants' );
        // dispatch for saga
        dispatch( { type: 'GET_PLANT' } );
        console.log( 'PlantList', plantList );
    }

  return (
    <div>
      <h1>Details</h1>
      <button >
            <Link to="/">Back</Link></button>
    </div>
  )
}

export default Details;