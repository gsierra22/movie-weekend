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
      genre_id: 0
    });

    const addNewMovie = event => {
      dispatch({ type: 'ADD_MOVIE', payload: newMovie });
  }


    const handleNewMovie = (event) => {
      console.log('event happened');
      //Similar to in redux -- we dont want to get rid of the id field when we update name
      setMovie({...newMovie, title: event.target.value})
  }

  const handleNewGenre = (event) => {
    console.log('event happened');
    //Similar to in redux -- we dont want to get rid of the id field when we update name
    setMovie ({...newMovie, genre_id: Number(event.target.value)})
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



  return (
    <div>
      <h1>AddMovie</h1>
      <pre>{JSON.stringify(newMovie)}</pre>
            <form onSubmit={addNewMovie}>
              <label>Enter Movie Title</label>
                <input type='text' placeholder='Title' value={newMovie.title} onChange={handleNewMovie} />
                <label>Enter Movie Genre</label>
                <select value={newMovie.genre_id} placeholder='Genre' onChange={( event )=>handleNewGenre( event )}>
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
                <label>Enter Movie Description</label>
                <input type='text' placeholder='Description' value={newMovie.description} onChange={handleNewDescription} />
                <label>Enter Movie Poster Url</label>
                <input type='text' className="image" placeholder='Poster' value={newMovie.poster} onChange={handleNewImage} />
                <Link to="/"><button onClick={addNewMovie}>Save</button></Link>
            </form>
      <button ><Link to="/">Back</Link></button>
    </div>
  )
}

export default AddMovie;