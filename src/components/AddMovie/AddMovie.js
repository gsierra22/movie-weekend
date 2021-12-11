import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import { RowDescriptionMessage } from 'pg-protocol/dist/messages';


function AddMovie() {
  
  // const reducerName = useSelector(store => store.reducerName);
  const dispatch = useDispatch();

  //Initial state is an OBJECT, with keys id and name
  let [newMovie, setMovie] = useState(
    {
      title:'',
      poster:'',
      description:'',
      movid_id: ''
    });


    const handleNewMovie = (event) => {
      console.log('event happened');
      //Similar to in redux -- we dont want to get rid of the id field when we update name
      setMovie({...newMovie, title: event.target.value})
  }

  const handleNewGenre = (event) => {
    console.log('event happened');
    //Similar to in redux -- we dont want to get rid of the id field when we update name
    setMovie ({...newMovie, movid_id: event.target.value})
}

const handleNewDescription = (event) => {
  console.log('event happened');
  //Similar to in redux -- we dont want to get rid of the id field when we update name
  setMovie({...newMovie, description: event.target.value})
}

const handleNewImage = (event) => {
  console.log('event happened');
  //Similar to in redux -- we dont want to get rid of the id field when we update name
  setMovie({...newMovie, poster: event.target.value})
}
  const addNewMovie = event => {
    dispatch({ type: 'ADD_MOVIE', payload: newMovie });
    //updates the next plant to have a new id
}

  return (
    <div>
      <h1>AddMovie</h1>
      <pre>{JSON.stringify(newMovie)}</pre>
            <form onSubmit={addNewMovie}>
                <input type='text' value={newMovie.title} onChange={handleNewMovie} />
                <select value={newMovie.movie_id} onChange={handleNewGenre}>
                  <option value={1}>Adventure</option>
                  <option value={2}>Animated</option>
                  <option value={3}>Biographical</option>
                  <option value={4}>Comedy</option>
                  <option value={5}>Disaster</option>
                  <option value={6}>Drama</option>
                  <option value={7}>Epic</option>
                  <option value={8}>Fanstasy</option>
                  <option value={9}>Musical</option>
                  <option value={10}>Romantic</option>
                  <option value={11}>Science Fiction</option>
                  <option value={12}>Space-Opera</option>
                  <option value={13}>Superhero</option>
                </select>
                <input type='text' value={newMovie.description} onChange={handleNewDescription} />
                <input type='text' value={newMovie.poster} onChange={handleNewImage} />
                <input type='submit' value='Add New Movie' />
            </form>
      <button ><Link to="/">Back</Link></button>
    </div>
  )
}

export default AddMovie;