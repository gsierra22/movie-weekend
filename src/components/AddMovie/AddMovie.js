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
      id:'',
      title:'',
      image:'',
      description:'',
      genre:''
    });

    const handleNewMovie = (event) => {
      console.log('event happened');
      //Similar to in redux -- we dont want to get rid of the id field when we update name
      setMovie({...newMovie, title: event.target.value})
  }

  const handleNewGenre = (event) => {
    console.log('event happened');
    //Similar to in redux -- we dont want to get rid of the id field when we update name
    setMovie({...newMovie, genre: event.target.value})
}

const handleNewDescription = (event) => {
  console.log('event happened');
  //Similar to in redux -- we dont want to get rid of the id field when we update name
  setMovie({...newMovie, description: event.target.value})
}

const handleNewImage = (event) => {
  console.log('event happened');
  //Similar to in redux -- we dont want to get rid of the id field when we update name
  setMovie({...newMovie, image: event.target.value})
}
  const addNewMovie = event => {
    event.preventDefault();
    dispatch({ type: 'ADD_MOVIE', payload: newMovie });
    //updates the next plant to have a new id
    setMovie({id:newMovie.id, title: ''});
}

  return (
    <div>
      <h1>AddMovie</h1>
      <pre>{JSON.stringify(newMovie)}</pre>
            <form onSubmit={addNewMovie}>
                <input type='text' value={newMovie.title} onChange={handleNewMovie} />
                <select value={newMovie.genre} onChange={handleNewGenre}>
                  <option>Adventure</option>
                  <option>Animated</option>
                  <option>Biographical</option>
                  <option>Comedy</option>
                  <option>Disaster</option>
                  <option>Drama</option>
                  <option>Epic</option>
                  <option>Fanstasy</option>
                  <option>Musical</option>
                  <option>Romantic</option>
                  <option>Science Fiction</option>
                  <option>Space-Opera</option>
                  <option>Superhero</option>
                </select>
                <input type='text' value={newMovie.description} onChange={handleNewDescription} />
                <input type='url' value={newMovie.image} onChange={handleNewImage} />
            </form>
      <button ><Link to="/">Back</Link></button>
    </div>
  )
}

export default AddMovie;