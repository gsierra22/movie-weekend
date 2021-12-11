import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';


function AddMovie() {
  
  // const reducerName = useSelector(store => store.reducerName);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>AddMovie</h1>
      <button ><Link to="/">Back</Link></button>
    </div>
  )
}

export default AddMovie;