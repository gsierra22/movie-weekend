import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import {Link} from 'react-router-dom';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <button ><Link to="/AddMovie">Add Movie</Link></button>
            <section className="movies">
                {movies.map(movie => {
                    
                    const setOneMovie = () => { 
                        dispatch( {
                            type: 'SET_MOVIE_DETAILS', 
                            payload:{
                                id: movie.id, 
                                title: movie.title, 
                                poster:movie.poster, 
                                description:movie.description 
                                }
                            } )
                    }
                    
                    
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <Link to='/details'><img className="image" src={movie.poster} alt={movie.title} onClick={setOneMovie}/></Link>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;