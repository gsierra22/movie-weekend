import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';


function Details(props) {
  
  const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        console.log('component did mount');
        getPlant();
        // dispatch an action to request the movies from the API
    }, []); 

    const getPlant = () =>{
        console.log( 'getting plants' );
        // dispatch for saga
        dispatch( { type: 'GET_PLANT' } );
        console.log( 'movies', movies );
    }

    const getMovies = ()=>{
      axios.get('/api/movie').then((res) => { 
        console.log('Successful AXIOS GET', res.data);
        setAdminOrders(res.data);
        console.log(adminOrders)
      }).catch((err) => {
        console.log('Error in AXIOS GET');
      })
    }

  return (
    <div>
      <h1>Details</h1>
      <button >
            <Link to="/">Back</Link></button>

            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                </tr>
                </thead>
                <tbody>
                {movies.map((movies) => ( 
                    <tr>
                        <td>{movies.id}</td>
                        <td>{movies.title}</td>
                    </tr>
                    )) 
                }
                </tbody>
            </table>
    </div>
  )
}

export default Details;