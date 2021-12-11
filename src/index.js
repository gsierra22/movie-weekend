import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_GENRES', fetchAllGenres)
    yield takeEvery( 'ADD_MOVIE', postNewMovie );;
    yield takeEvery( 'ADD_GENRE', postNewGenre );;
}

function *postNewGenre( action ){
    console.log( 'in *postSaga:', action );
    try {
      const response = yield axios.post('/api/movie', action.payload);
      yield put({type: 'FETCH_GENRES', payload: response.data})
    } catch (err) {
        console.log('error:', err);
    }
  }

function *postNewMovie( action ){
    console.log( 'in *postSaga:', action );
    try {
      const response = yield axios.post('/api/movie', action.payload);
      yield put({type: 'FETCH_MOVIES', payload: response.data})
    } catch (err) {
        console.log('error:', err);
    }
  }

function* fetchAllMovies(action) {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
        
}

function* fetchAllGenres( action ) {
    console.log ('Genres:', action.payload);
    try {
        const genres = yield axios.get(`/api/genre/${action.payload}`);
        console.log('get all:', genres.data);
        yield put({ type: 'SET_GENRES', payload: genres.data });

    } catch {
        console.log('get all error');
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

const movieDetails = (state ={}, action) => {
    switch (action.type) {
        case 'SET_MOVIE_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        movieDetails
        
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
