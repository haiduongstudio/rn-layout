import { FETCH_MOVIES, FETCH_SUCCESDED, FETCT_FAILED } from './actionTypes';

export const fetchMoviesAction = sort => ({
  type: FETCH_MOVIES,
  sort
});

export const addMovieAction = newMovie => ({
  type: type,
  newMovie
});

// Action sent by Redux-saga
export const fetchSuccessAction = receivedMovies => ({
  type: FETCH_SUCCESDED,
  receivedMovies
});

export const fetchFailedAction = err => ({
  type: FETCT_FAILED,
  err
});
